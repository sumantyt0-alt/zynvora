import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center bg-slate-50">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">
            Learn <span className="text-blue-600">AI</span> Skills
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Learn Web Development, AI, MERN Stack, Python and much more from industry experts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
              Explore Courses
            </button>

            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;