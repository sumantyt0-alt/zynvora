import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Zynvora
          </h2>

          <p className="mt-4 text-gray-400">
            Learn modern skills with industry-level courses and
            build your dream career.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li><Link to="/">Home</Link></li>

            <li><Link to="/courses">Courses</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📧 support@zynvora.com
          </p>

          <p className="text-gray-400 mt-2">
            📞 +91 8235372194
          </p>

          <p className="text-gray-400 mt-2">
            📍 India
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">

            <FaFacebook className="hover:text-blue-500 cursor-pointer" />

            <FaInstagram className="hover:text-pink-500 cursor-pointer" />

            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />

            <FaGithub className="hover:text-gray-300 cursor-pointer" />

          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-6 text-gray-400">
        © 2026 Zynvora. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;