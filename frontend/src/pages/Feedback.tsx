import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import FeedbackService, { Feedback } from "../services/feedback.service";

function FeedbackPage() {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  /* ===== LOAD FEEDBACK ===== */
  const loadFeedback = async () => {
    try {
      const data = await FeedbackService.getAll();
      setFeedbackList(data);
    } catch (err) {
      console.error("Feedback fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  /* ===== SUBMIT FEEDBACK ===== */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Please login to submit feedback");
      return;
    }

    if (!title.trim() || !description.trim()) return;

    setLoading(true);

    try {
      await FeedbackService.create({ title, description });

      // Reload (AI agent may update features)
      await loadFeedback();

      setTitle("");
      setDescription("");
      setShowForm(false);
    } catch (err) {
      console.error("Submit feedback failed", err);
      alert("Failed to submit feedback");
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Feedback
            </h1>
            <p className="text-gray-400">
              Submit and track your product feedback.
            </p>
          </div>

          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-semibold"
          >
            {showForm ? "Cancel" : "New Feedback"}
          </button>
        </div>

        {/* FORM */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 space-y-4"
          >
            <input
              className="w-full px-4 py-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Feedback title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              required
            />

            <textarea
              className="w-full px-4 py-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the issue or idea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <button
              disabled={loading || !title.trim() || !description.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:opacity-50 px-6 py-3 rounded text-white font-semibold"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}

        {/* LOADING STATE */}
        {loading && (
          <p className="text-gray-400 text-center">
            Loading feedback...
          </p>
        )}

        {/* FEEDBACK LIST */}
        {!loading && feedbackList.length > 0 && (
          <div className="space-y-4">
            {feedbackList.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700"
              >
                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-1">
                  {item.description}
                </p>

                <div className="text-xs text-gray-500 mt-2 flex items-center gap-2">
                  <span>@{item.username ?? "unknown"}</span>
                  <span>•</span>
                  <span>
                    {item.created_at
                      ? new Date(item.created_at).toLocaleString()
                      : "—"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && feedbackList.length === 0 && (
          <p className="text-gray-400 text-center">
            No feedback submitted yet.
          </p>
        )}
      </div>
    </Layout>
  );
}

export default FeedbackPage;