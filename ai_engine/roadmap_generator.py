def generate_roadmap(scored_features):
    """
    Generates roadmap items based on priority score.
    """

    roadmap = []

    for item in scored_features:
        if item["priority_score"] >= 2:
            quarter = "Q1"
        elif item["priority_score"] >= 1:
            quarter = "Q2"
        else:
            quarter = "Q3"

        roadmap.append({
            "feature": item["feature"],
            "quarter": quarter,
            "justification": f"Prioritized due to impact and frequency of user feedback."
        })

    return roadmap