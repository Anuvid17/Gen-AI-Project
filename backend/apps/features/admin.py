from django.contrib import admin
from .models import Feature, FeatureFeedbackMap
from apps.ai_agent.services import similarity_score
from apps.ai_agent.scoring import calculate_impact, estimate_effort


@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "priority",
        "impact",
        "effort",
        "confidence_score",
        "status",
        "created_at",
    )

    readonly_fields = ("confidence_score", "created_at")

    search_fields = ("name", "description")
    list_filter = ("priority", "status")

    ordering = ("-created_at",)

    def save_model(self, request, obj, form, change):
        """
        Auto-calculate AI scores when admin saves a Feature
        """
        obj.impact = calculate_impact(obj.description)
        obj.effort = estimate_effort(obj.description)

        obj.confidence_score = similarity_score(
            obj.description,
            obj.description
        )

        super().save_model(request, obj, form, change)


@admin.register(FeatureFeedbackMap)
class FeatureFeedbackMapAdmin(admin.ModelAdmin):
    list_display = ("feature", "feedback", "created_at")
    readonly_fields = ("created_at",)