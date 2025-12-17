from collections import Counter

def score_features(extracted_features):
    """
    Assigns priority scores based on frequency and sentiment.
    """

    feature_counts = Counter([item["feature"] for item in extracted_features])
    scored_features = []

    for feature, count in feature_counts.items():
        sentiment_weight = 1.0

        if feature.lower().find("login") != -1:
            sentiment_weight = 1.5

        priority_score = count * sentiment_weight

        scored_features.append({
            "feature": feature,
            "priority_score": round(priority_score, 2)
        })

    return scored_features