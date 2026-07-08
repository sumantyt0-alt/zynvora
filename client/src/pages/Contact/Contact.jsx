import Navbar from "../../components/Navbar/Navbar";
function Contact() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
    </>
  );
}

export default Contact;