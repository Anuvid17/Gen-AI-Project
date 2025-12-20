from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Feedback
from .serializers import FeedbackSerializer
from apps.ai_agent.agent import AIAgent


class FeedbackViewSet(ModelViewSet):
    """
    Handles CRUD operations for user feedback.
    Each user can only access their own feedback.
    """

    serializer_class = FeedbackSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Only return feedback created by the logged-in user
        return Feedback.objects.filter(user=self.request.user).order_by("-created_at")

    def perform_create(self, serializer):
        # Save feedback with logged-in user
        feedback = serializer.save(user=self.request.user)

        # Trigger AI processing after feedback creation
        AIAgent.process_feedback(feedback)