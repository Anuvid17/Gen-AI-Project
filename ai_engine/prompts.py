FEATURE_EXTRACTION_PROMPT = """
You are an AI assistant analyzing user feedback.

From the following feedback, extract:
1. Feature or product area
2. User intent (bug, feature request, complaint, improvement)
3. Sentiment (positive, neutral, negative)

Respond in JSON format only.

Feedback:
{feedback}
"""

ROADMAP_PROMPT = """
You are a product strategy AI.

Given the following prioritized features, assign each feature
to a roadmap quarter (Q1, Q2, or Q3) and provide a short justification.

Features:
{features}

Respond in JSON format only.
"""