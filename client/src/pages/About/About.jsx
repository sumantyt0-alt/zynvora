import Navbar from "../../components/Navbar/Navbar";
function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
       

        <h1 className="text-5xl font-bold text-center mb-8">
          About Zynvora
        </h1>

        <p className="text-lg text-gray-600 text-center leading-8">
          Zynvora is an online learning platform where students can
          learn Web Development, AI, Data Science and many more skills
          through high-quality courses.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold">🎯 Mission</h2>
            <p className="mt-4 text-gray-600">
              Make quality education affordable for everyone.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold">🚀 Vision</h2>
            <p className="mt-4 text-gray-600">
              Build India's most trusted learning platform.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold">❤️ Values</h2>
            <p className="mt-4 text-gray-600">
              Learning, Innovation and Student Success.
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default About;