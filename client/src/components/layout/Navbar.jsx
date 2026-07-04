import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          Learn AI
        </Link>

        <div className="flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 border rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;