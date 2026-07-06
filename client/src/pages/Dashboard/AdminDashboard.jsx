import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div
        onClick={() => navigate("/admin/add-course")}
        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl"
      >
        <h2 className="text-xl font-bold">➕ Add Course</h2>
        <p className="mt-3 text-gray-500">
          Create a new course
        </p>
      </div>

      <div
        onClick={() => navigate("/admin/courses")}
        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl"
      >
        <h2 className="text-xl font-bold">📚 Manage Courses</h2>
        <p className="mt-3 text-gray-500">
          Edit or delete courses
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold">👨‍🎓 Students</h2>
        <p className="mt-3 text-gray-500">
          Manage enrolled students
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold">📈 Analytics</h2>
        <p className="mt-3 text-gray-500">
          Platform statistics
        </p>
      </div>

    </div>
  );
}

export default AdminDashboard;