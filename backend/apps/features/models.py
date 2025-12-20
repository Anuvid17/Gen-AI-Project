from django.db import models
from apps.feedback.models import Feedback

class Feature(models.Model):
    PRIORITY_CHOICES = [
        ("low", "Low"),
        ("medium", "Medium"),
        ("high", "High"),
        ("critical", "Critical"),
    ]

    STATUS_CHOICES = [
        ("backlog", "Backlog"),
        ("in-development", "In Development"),
        ("testing", "Testing"),
        ("deployed", "Deployed"),
    ]

    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES)
    impact = models.IntegerField()
    effort = models.CharField(max_length=10)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="backlog"
    )
    confidence_score = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

    ai_reason = models.TextField(blank=True)
    last_ai_update = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name


class FeatureFeedbackMap(models.Model):
    feature = models.ForeignKey(
        Feature, on_delete=models.CASCADE, related_name="feedback_links"
    )
    feedback = models.ForeignKey(
        Feedback, on_delete=models.CASCADE, related_name="feature_links"
    )
    similarity_score = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.feature.name} ↔ {self.feedback.id}"