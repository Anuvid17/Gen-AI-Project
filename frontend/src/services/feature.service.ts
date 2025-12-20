import api from "./api";

/* ---------- Shared Domain Types ---------- */

export type Priority = "low" | "medium" | "high" | "critical";

export type Status =
  | "backlog"
  | "in-development"
  | "testing"
  | "deployed";

/* ---------- Nested Types ---------- */

export interface FeedbackMini {
  id: number;
  title: string;
  username: string;
  created_at: string;
}

export interface FeatureFeedbackMap {
  feedback: FeedbackMini;
  created_at: string;
}

/* ---------- Feature Type ---------- */

export interface Feature {
  id: number;
  name: string;
  description: string;
  priority: Priority;
  impact: number;
  effort: string;
  status: Status;
  confidence_score: number;
  created_at: string;
  feedback_count: number;
  feedbacks: FeatureFeedbackMap[];
  ai_reason: string;
  last_ai_update: string | null;
}

/* ---------- API Calls ---------- */

const FeatureService = {
  getAll: async (): Promise<Feature[]> => {
    const response = await api.get("/features/");
    return response.data;
  },

  getById: async (id: number): Promise<Feature> => {
    const response = await api.get(`/features/${id}/`);
    return response.data;
  },
};

export default FeatureService;