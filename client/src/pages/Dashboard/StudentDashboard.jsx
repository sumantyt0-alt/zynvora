function StudentDashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold">
          📚 My Courses
        </h2>

        <p className="mt-3 text-gray-500">
          View enrolled courses
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold">
          📈 Progress
        </h2>

        <p className="mt-3 text-gray-500">
          Track your learning
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold">
          🏆 Certificates
        </h2>

        <p className="mt-3 text-gray-500">
          Download certificates
        </p>
      </div>

    </div>
  );
}

export default StudentDashboard;