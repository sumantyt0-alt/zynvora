function Newsletter() {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Stay Updated 🚀
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Subscribe to get the latest courses, offers and updates.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 px-5 py-3 rounded-lg text-black outline-none"
          />

          <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;