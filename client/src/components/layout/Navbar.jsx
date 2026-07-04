import { Link, NavLink } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    `transition hover:text-blue-600 ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaGraduationCap className="text-3xl text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-600">
            Learn AI
          </h1>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/courses" className={navLinkStyle}>
            Courses
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button className="text-3xl">☰</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;