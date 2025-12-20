import { useNavigate } from "react-router-dom";
import { User, Mail, Calendar, LogOut } from "lucide-react";
import Layout from "../components/Layout";
import { logout } from "../services/auth.service";

interface StoredUser {
  id: number;
  username: string;
  email: string;
}

function Profile() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const user: StoredUser | null = storedUser
    ? JSON.parse(storedUser)
    : null;

  // 🔐 Redirect if not logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Profile
          </h1>
          <p className="text-gray-400">
            Manage your account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT PANEL */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <User size={48} className="text-gray-900" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                {user.username}
              </h2>

              <p className="text-gray-400 mb-6">
                Registered User
              </p>

              <div className="space-y-3">
                <div className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium text-center">
                  Active
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                Account Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                  <User size={20} className="text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Username</p>
                    <p className="text-white font-medium">
                      {user.username}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                  <Mail size={20} className="text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">
                      Email Address
                    </p>
                    <p className="text-white font-medium">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                  <Calendar size={20} className="text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">
                      Member Since
                    </p>
                    <p className="text-white font-medium">
                      —{/* Can be added later */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* OPTIONAL: Subscription Placeholder */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                Subscription
              </h3>

              <p className="text-gray-400">
                Free plan (default)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;