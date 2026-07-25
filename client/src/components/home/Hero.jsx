import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUsers,
  FaBookOpen,
  FaStar,
  FaSearch,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-linear-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
            🚀 India's Fastest Growing Learning Platform
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight">
            Learn Without Limits
            <br />
            <span className="text-yellow-300">
              Build Your Dream Career
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
            Master Web Development, Artificial Intelligence, Data Science,
            Java, Python, MERN Stack and much more through real-world
            projects taught by industry experts.
          </p>

          {/* Search */}
          <div className="mt-8 flex bg-white rounded-2xl overflow-hidden shadow-2xl max-w-xl">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="flex-1 px-6 py-4 text-gray-700 outline-none"
            />

            <button className="bg-blue-600 px-6 flex items-center gap-2 text-white font-semibold hover:bg-blue-700 transition">
              <FaSearch />
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              to="/courses"
              className="bg-white text-blue-700 px-7 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition"
            >
              Explore Courses
              <FaArrowRight />
            </Link>

            <Link
              to="/register"
              className="border border-white px-7 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
            >
              Join Free
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <FaUsers className="text-3xl text-yellow-300" />
              <h2 className="text-3xl font-bold mt-3">10K+</h2>
              <p className="text-gray-300">Students</p>
            </div>

            <div>
              <FaBookOpen className="text-3xl text-yellow-300" />
              <h2 className="text-3xl font-bold mt-3">150+</h2>
              <p className="text-gray-300">Courses</p>
            </div>

            <div>
              <FaStar className="text-3xl text-yellow-300" />
              <h2 className="text-3xl font-bold mt-3">4.9</h2>
              <p className="text-gray-300">Rating</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="Students Learning"
            className="rounded-3xl shadow-2xl w-full max-w-xl"
          />

          {/* Floating Card 1 */}
          <div className="absolute top-6 -left-5 bg-white text-gray-900 px-5 py-4 rounded-2xl shadow-2xl">
            <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
            <p className="font-bold text-lg">4.9 Rating</p>
            <p className="text-sm text-gray-500">
              From 15,000+ Reviews
            </p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-8 -right-5 bg-white text-gray-900 px-5 py-4 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-600">
              10K+
            </h3>
            <p className="text-sm text-gray-500">
              Active Students
            </p>
          </div>

          {/* Floating Card 3 */}
          <div className="absolute bottom-40 -left-8 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-xl">
            <p className="font-bold text-green-600">
              🎓 150+ Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;