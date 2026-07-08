import { useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import StudentDashboard from "./StudentDashboard";
import Navbar from "../../components/Navbar/Navbar";
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
      <div className="bg-blue-600 text-white py-6 shadow">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {user?.name}
            </h1>

            <p className="mt-2">
              {user?.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Cards */}
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