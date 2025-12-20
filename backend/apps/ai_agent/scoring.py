from typing import Tuple


def calculate_priority(
    feedback_count: int,
    similarity_score: float | None = None
) -> str:
    """
    Determine priority using feedback volume + semantic similarity.
    Deterministic & explainable.
    """

    similarity_score = similarity_score or 0.0

    # CRITICAL
    if feedback_count >= 5 or similarity_score >= 0.85:
        return "critical"

    # HIGH
    if feedback_count >= 3 or similarity_score >= 0.6:
        return "high"

    # MEDIUM
    if feedback_count >= 2:
        return "medium"

    # LOW
    return "low"


def generate_ai_reason(
    feedback_count: int,
    similarity_score: float
) -> str:
    """
    Human-readable explanation for UI & audit trail.
    """
    return (
        f"Priority assigned based on {feedback_count} related feedback items "
        f"and similarity score {round(similarity_score, 2)}."
    )


def calculate_impact(text: str) -> int:
    """
    Impact score based on severity keywords.
    """
    keywords = ["slow", "crash", "error", "fail", "bug", "block", "broken"]
    score = 1

    for word in keywords:
        if word in text.lower():
            score += 1

    return min(score, 5)


def estimate_effort(text: str) -> str:
    """
    Rough effort estimation.
    """
    text = text.lower()

    if "performance" in text or "backend" in text or "database" in text:
        return "L"

    if "ui" in text or "design" in text or "frontend" in text:
        return "S"

    return "M"