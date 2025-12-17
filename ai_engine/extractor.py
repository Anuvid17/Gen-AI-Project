def extract_features(feedback_list):
    """
    Simulates LLM-based feature extraction.
    Replace this logic with real LLM calls later.
    """

    extracted = []

    for text in feedback_list:
        if "login" in text.lower():
            extracted.append({
                "feature": "Login Performance",
                "intent": "bug",
                "sentiment": "negative"
            })
        elif "ui" in text.lower():
            extracted.append({
                "feature": "User Interface",
                "intent": "improvement",
                "sentiment": "negative"
            })
        elif "search" in text.lower():
            extracted.append({
                "feature": "Search Functionality",
                "intent": "bug",
                "sentiment": "negative"
            })
        else:
            extracted.append({
                "feature": "General Feedback",
                "intent": "feature request",
                "sentiment": "neutral"
            })

    return extracted