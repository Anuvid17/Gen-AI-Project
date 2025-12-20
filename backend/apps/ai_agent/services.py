import re
from collections import Counter

STOPWORDS = {"the", "is", "and", "to", "of", "in", "on", "for", "a"}

def clean_text(text: str):
    text = text.lower()
    text = re.sub(r"[^a-z\s]", "", text)
    return [word for word in text.split() if word not in STOPWORDS]

def similarity_score(text1: str, text2: str) -> float:
    words1 = Counter(clean_text(text1))
    words2 = Counter(clean_text(text2))

    common = sum((words1 & words2).values())
    total = sum((words1 | words2).values())

    return common / total if total else 0