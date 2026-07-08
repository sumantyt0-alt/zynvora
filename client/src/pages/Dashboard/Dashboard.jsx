import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import AdminDashboard from "./AdminDashboard";
import StudentDashboard from "./StudentDashboard";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">

        {/* Header */}

        <div className="bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 text-white shadow-lg">

          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

            <div>

              <h1 className="text-4xl font-bold">
                Welcome, {user?.name} 👋
              </h1>

              <p className="mt-3 text-blue-100">
                {user?.email}
              </p>

              <span className="inline-block mt-4 bg-white/20 px-4 py-2 rounded-full text-sm">
                {user?.role === "admin"
                  ? "👨‍💼 Administrator"
                  : "👨‍🎓 Student"}
              </span>

            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Logout
            </button>

          </div>

        </div>

        {/* Dashboard */}

        <div className="max-w-7xl mx-auto px-6 py-10">

          {user?.role === "admin" ? (
            <AdminDashboard />
          ) : (
            <StudentDashboard />
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;