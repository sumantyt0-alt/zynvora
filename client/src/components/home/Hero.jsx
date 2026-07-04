function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="lg:w-1/2">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 India's Modern Learning Platform
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Learn Today,
            <br />
            Build Tomorrow.
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Master MERN Stack, AI, Python, Java and many more technologies with
            hands-on projects and expert guidance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Explore Courses
            </button>

            <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-blue-100">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">100+</h2>
              <p className="text-blue-100">Courses</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">4.9★</h2>
              <p className="text-blue-100">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Students Learning"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;