from rest_framework.routers import DefaultRouter
from .views import FeatureViewSet
from .stats import StatsAPIView
from django.urls import path

router = DefaultRouter()
router.register("", FeatureViewSet, basename="feature")

urlpatterns = router.urls

urlpatterns += [
    path("stats/", StatsAPIView.as_view(), name="feature-stats"),
]