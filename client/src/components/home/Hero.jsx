import { Link } from "react-router-dom";
import { FaArrowRight, FaUsers, FaBookOpen, FaStar } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 India's Fastest Growing Learning Platform
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight">
            Learn Skills That
            <span className="text-yellow-300"> Build Your Future</span>
          </h1>

          <p className="mt-8 text-lg text-gray-200 leading-8">
            Master Web Development, AI, Data Science, Java, Python,
            MERN Stack and much more through real-world projects.
          </p>

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

          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>
              <FaUsers className="text-3xl text-yellow-300" />
              <h2 className="text-3xl font-bold mt-3">
                10K+
              </h2>
              <p className="text-gray-200">
                Students
              </p>
            </div>

            <div>
              <FaBookOpen className="text-3xl text-yellow-300" />
              <h2 className="text-3xl font-bold mt-3">
                150+
              </h2>
              <p className="text-gray-200">
                Courses
              </p>
            </div>

            <div>
              <FaStar className="text-3xl text-yellow-300" />
              <h2 className="text-3xl font-bold mt-3">
                4.9
              </h2>
              <p className="text-gray-200">
                Rating
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="Students Learning"
            className="rounded-3xl shadow-2xl w-full max-w-xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;