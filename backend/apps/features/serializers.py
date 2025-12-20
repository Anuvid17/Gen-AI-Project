from rest_framework import serializers
from .models import Feature, FeatureFeedbackMap
from apps.feedback.serializers import FeedbackMiniSerializer

class FeatureFeedbackMapSerializer(serializers.ModelSerializer):
    feedback = FeedbackMiniSerializer(read_only=True)

    class Meta:
        model = FeatureFeedbackMap
        fields = [
            "feedback",
            "created_at",
        ]

class FeatureSerializer(serializers.ModelSerializer):
    feedback_count = serializers.IntegerField(read_only=True)

    feedbacks = FeatureFeedbackMapSerializer(
        source="feedback_links",
        many=True,
        read_only=True
    )

    class Meta:
        model = Feature
        fields = [
            "id",
            "name",
            "description",
            "priority",
            "impact",
            "effort",
            "status",
            "confidence_score",
            "created_at",
            "feedback_count",
            "feedbacks",
            "ai_reason",
            "last_ai_update",
        ]