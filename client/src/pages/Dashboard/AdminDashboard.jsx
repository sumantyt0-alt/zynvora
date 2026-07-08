import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminDashboard } from "../../services/dashboardService";

function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalEnrollments: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const data = await getAdminDashboard(token);

        setStats(data.stats);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="space-y-8">

      {/* Welcome */}

      <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold">
          👋 Welcome Admin
        </h1>

        <p className="mt-3 text-blue-100 text-lg">
          Manage courses, students and monitor your LMS platform.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500">📚 Total Courses</h3>
          <p className="text-4xl font-bold mt-3 text-blue-600">
            {stats.totalCourses}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500">👨‍🎓 Students</h3>
          <p className="text-4xl font-bold mt-3 text-green-600">
            {stats.totalStudents}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500">📝 Enrollments</h3>
          <p className="text-4xl font-bold mt-3 text-purple-600">
            {stats.totalEnrollments}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500">💰 Revenue</h3>
          <p className="text-4xl font-bold mt-3 text-orange-500">
            ₹{stats.totalRevenue}
          </p>
        </div>

      </div>

      {/* Quick Actions */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div
            onClick={() => navigate("/admin/add-course")}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">➕ Add Course</h2>

            <p className="text-gray-500 mt-3">
              Create a new course
            </p>
          </div>

          <div
            onClick={() => navigate("/admin/courses")}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">📚 Manage Courses</h2>

            <p className="text-gray-500 mt-3">
              Edit & Delete Courses
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-bold">👨‍🎓 Students</h2>

            <p className="text-gray-500 mt-3">
              View enrolled students
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-bold">📈 Analytics</h2>

            <p className="text-gray-500 mt-3">
              Platform statistics
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;