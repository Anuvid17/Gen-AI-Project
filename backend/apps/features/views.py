from django.db.models import Count
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Feature
from .serializers import FeatureSerializer

class FeatureViewSet(ModelViewSet):
    serializer_class = FeatureSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            Feature.objects
            .annotate(feedback_count=Count("feedback_links"))
            .prefetch_related("feedback_links__feedback")
            .order_by("-feedback_count", "-confidence_score")
        )