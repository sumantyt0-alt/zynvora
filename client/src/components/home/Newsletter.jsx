function Newsletter() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Stay Updated 🚀
        </h2>

        <p className="mt-4 text-blue-100">
          Subscribe to get the latest courses, offers, and learning tips.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl text-black w-full sm:w-96 outline-none"
          />

          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;