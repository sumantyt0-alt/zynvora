import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navLink =
    "hover:text-blue-600 transition font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/home"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaGraduationCap className="text-3xl" />

          Zynvora
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/home"
            className={navLink}
          >
            home
          </NavLink>

          <NavLink
            to="/courses"
            className={navLink}
          >
            Courses
          </NavLink>

          <NavLink
            to="/my-learning"
            className={navLink}
          >
            My Learning
          </NavLink>
          
          <NavLink
            to="/about"
            className={navLink}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={navLink}
          >
            Contact
          </NavLink>

          <NavLink
            to="/assistant"
            className={navLink}
          >
            🤖 Assistant
          </NavLink>

        </div>

        {/* Right Side */}

        <div className="hidden md:flex items-center gap-4">

          {token ? (
            <>
              <span className="font-semibold text-gray-700">
                Hi, {user?.name}
              </span>

              <button
                onClick={() => navigate("/dashboard")}
                className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Dashboard
              </button>

              <button
                onClick={logout}
                className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Register
              </button>
            </>
          )}

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <NavLink
            to="/home"
            className="block px-6 py-3"
          >
            home
          </NavLink>

          <NavLink
            to="/courses"
            className="block px-6 py-3"
          >
            Courses
          </NavLink>

          <NavLink
            to="/my-learning"
            className="block px-6 py-3"
          >
            My Learning
          </NavLink>

          <NavLink
            to="/about"
            className="block px-6 py-3"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="block px-6 py-3"
          >
            Contact
          </NavLink>

          <NavLink
            to="/assistant"
            className="block px-6 py-3"
          >
            🤖 Assistant
          </NavLink>

          {!token ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="w-full text-left px-6 py-3"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="w-full text-left px-6 py-3"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="cursor-pointer w-full text-left px-6 py-3"
              >
                Dashboard
              </button>

              <button
                onClick={logout}
                className="w-full text-left px-6 py-3 text-red-600"
              >
                Logout
              </button>
            </>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;