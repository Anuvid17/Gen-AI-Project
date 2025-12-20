from django.utils import timezone

from apps.feedback.models import Feedback
from apps.features.models import Feature, FeatureFeedbackMap
from .services import similarity_score
from .scoring import (
    calculate_priority,
    calculate_impact,
    estimate_effort,
    generate_ai_reason,
)

SIMILARITY_THRESHOLD = 0.3


class AIAgent:

    @staticmethod
    def process_feedback(new_feedback):
        features = Feature.objects.all()
        matched = False

        for feature in features:
            score = similarity_score(
                new_feedback.description,
                feature.description
            )

            if score >= SIMILARITY_THRESHOLD:
                matched = True

                # 🔗 Create mapping with similarity score
                FeatureFeedbackMap.objects.create(
                    feature=feature,
                    feedback=new_feedback,
                    similarity_score=round(score, 2),
                )

                # 🔁 Recalculate metrics
                links = FeatureFeedbackMap.objects.filter(feature=feature)
                feedback_count = links.count()

                avg_similarity = (
                    sum(l.similarity_score for l in links) / feedback_count
                )

                feature.confidence_score = round(avg_similarity, 2)
                feature.impact = calculate_impact(new_feedback.description)

                # 🧠 Priority + explanation
                feature.priority = calculate_priority(
                    feedback_count=feedback_count,
                    similarity_score=avg_similarity,
                )

                feature.ai_reason = generate_ai_reason(
                    feedback_count=feedback_count,
                    similarity_score=avg_similarity,
                )

                feature.last_ai_update = timezone.now()
                feature.save()

        # 🆕 No match → create new feature
        if not matched:
            new_feature = Feature.objects.create(
                name=AIAgent.generate_feature_name(new_feedback.description),
                description=new_feedback.description,
                priority="low",
                impact=calculate_impact(new_feedback.description),
                effort=estimate_effort(new_feedback.description),
                confidence_score=0.5,
                status="backlog",
                ai_reason="Initial feature created from first feedback.",
                last_ai_update=timezone.now(),
            )

            FeatureFeedbackMap.objects.create(
                feature=new_feature,
                feedback=new_feedback,
                similarity_score=1.0,
            )

    @staticmethod
    def generate_feature_name(text: str) -> str:
        words = text.split()[:5]
        return " ".join(words).title()
