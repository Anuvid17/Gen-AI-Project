from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from apps.feedback.models import Feedback
from apps.features.models import Feature

class StatsAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "total_feedback": Feedback.objects.count(),
            "total_features": Feature.objects.count(),
            "critical_features": Feature.objects.filter(priority="critical").count(),
        })