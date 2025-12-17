from extractor import extract_features
from scorer import score_features
from roadmap_generator import generate_roadmap

def run_ai_agent(feedback_list):
    print("Starting AI Feedback Analysis Agent...\n")

    extracted = extract_features(feedback_list)
    print("Step 1: Feature Extraction Completed")

    scored = score_features(extracted)
    print("Step 2: Feature Scoring Completed")

    roadmap = generate_roadmap(scored)
    print("Step 3: Roadmap Generation Completed\n")

    return {
        "features": scored,
        "roadmap": roadmap
    }


if __name__ == "__main__":
    from sample_data import sample_feedback

    output = run_ai_agent(sample_feedback)

    print("Final AI Output:\n")
    print(output)