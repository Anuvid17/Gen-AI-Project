from rest_framework import serializers
from .models import Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = Feedback
        fields = [
            "id",
            "title",
            "description",
            "username",
            "created_at",
        ]

class FeedbackMiniSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = Feedback
        fields = [
            "id",
            "title",
            "username",
            "created_at",
        ]