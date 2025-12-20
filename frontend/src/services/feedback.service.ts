import api from "./api";

export interface Feedback {
  id: number;
  title: string;
  description: string;
  username: string;
  created_at: string;
}

const FeedbackService = {
  getAll: async (): Promise<Feedback[]> => {
    const response = await api.get("/feedback/");
    return response.data;
  },

  create: async (data: {
    title: string;
    description: string;
  }): Promise<Feedback> => {
    const response = await api.post("/feedback/", data);
    return response.data;
  },
};

export default FeedbackService;
