function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 India's Trusted Learning Platform
          </span>

          <h1 className="text-6xl font-extrabold leading-tight mt-8">
            Learn
            <br />
            Future-Ready Skills
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Master MERN Stack, AI, Python, Cloud Computing and become
            job-ready with real-world projects.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Start Learning
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">
              Explore Courses
            </button>

          </div>

          <div className="flex gap-10 mt-12 flex-wrap">

            <div>
              <h2 className="text-4xl font-bold">10K+</h2>
              <p>Students</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">120+</h2>
              <p>Courses</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">4.9★</h2>
              <p>Rating</p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md h-96 flex items-center justify-center">

            <span className="text-8xl">
              👨‍💻
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;