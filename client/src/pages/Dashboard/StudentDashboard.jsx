import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">

      {/* Welcome */}

      <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8 shadow-xl">

        <h1 className="text-4xl font-bold">
          👋 Welcome Back
        </h1>

        <p className="mt-3 text-blue-100 text-lg">
          Continue your learning journey with Zynvora.
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500">
            📚 Enrolled Courses
          </h3>

          <p className="text-4xl font-bold text-blue-600 mt-3">
            5
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500">
            📈 Progress
          </h3>

          <p className="text-4xl font-bold text-green-600 mt-3">
            65%
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500">
            🏆 Certificates
          </h3>

          <p className="text-4xl font-bold text-purple-600 mt-3">
            2
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500">
            ⭐ Completed
          </h3>

          <p className="text-4xl font-bold text-orange-500 mt-3">
            3
          </p>
        </div>

      </div>

      {/* Continue Learning */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Continue Learning
        </h2>

        <div className="space-y-6">

          <div>

            <div className="flex justify-between mb-2">
              <span>React Complete Bootcamp</span>
              <span>70%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div className="bg-blue-600 h-3 rounded-full w-[70%]"></div>

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Node.js Masterclass</span>
              <span>40%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div className="bg-green-600 h-3 rounded-full w-[40%]"></div>

            </div>

          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="grid md:grid-cols-3 gap-6">

        <div
          onClick={() => navigate("/courses")}
          className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-2xl font-bold">
            📚 Browse Courses
          </h2>

          <p className="mt-3 text-gray-500">
            Explore new courses
          </p>
        </div>

        <div
          onClick={() => navigate("/my-learning")}
          className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-2xl font-bold">
            🎓 My Learning
          </h2>

          <p className="mt-3 text-gray-500">
            Continue your courses
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">

          <h2 className="text-2xl font-bold">
            🏆 Certificates
          </h2>

          <p className="mt-3 text-gray-500">
            Download certificates
          </p>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span>✅ Enrolled in React Complete Bootcamp</span>
            <span className="text-gray-500">
              Today
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>📖 Completed HTML Module</span>
            <span className="text-gray-500">
              Yesterday
            </span>
          </div>

          <div className="flex justify-between">
            <span>🏆 Certificate Earned</span>
            <span className="text-gray-500">
              2 days ago
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;