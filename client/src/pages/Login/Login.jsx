import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState("student");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await loginUser(form);


      // Admin login check
      if (loginType === "admin" && data.user.role !== "admin") {
        toast.error("This account is not an Admin.");
        return;
      }


      // Student login check
      if (loginType === "student" && data.user.role !== "student") {
        toast.error("This account is not a Student.");
        return;
      }


      // Save login data
      localStorage.setItem("token", data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      toast.success("Login Successful");


      // Login ke baad Home page par jayega
      navigate("/");


    } catch (error) {

      toast.error(
        error.response?.data?.message || "Login failed"
      );

    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h2 className="text-3xl font-bold text-center mb-6">

          {loginType === "admin"
            ? "👨‍💼 Admin Login"
            : "👨‍🎓 Student Login"}

        </h2>


        <div className="flex bg-gray-200 rounded-lg p-1 mb-6">


          <button
            type="button"
            onClick={() => setLoginType("student")}
            className={`w-1/2 py-2 rounded-lg font-semibold transition ${
              loginType === "student"
                ? "bg-blue-600 text-white"
                : "text-gray-700"
            }`}
          >
            👨‍🎓 Student
          </button>



          <button
            type="button"
            onClick={() => setLoginType("admin")}
            className={`w-1/2 py-2 rounded-lg font-semibold transition ${
              loginType === "admin"
                ? "bg-indigo-700 text-white"
                : "text-gray-700"
            }`}
          >
            👨‍💼 Admin
          </button>


        </div>



        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
          required
        />



        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          className="w-full border p-3 rounded mb-6"
          onChange={handleChange}
          required
        />



        <button
          type="submit"
          className={`w-full text-white py-3 rounded-lg transition ${
            loginType === "admin"
              ? "bg-indigo-700 hover:bg-indigo-800"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >

          {loginType === "admin"
            ? "Login as Admin"
            : "Login as Student"}

        </button>



        <p className="text-center mt-5 text-gray-600">

          Don't have an account?{" "}

          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer font-semibold"
          >
            Register
          </span>

        </p>


      </form>

    </div>

  );
}

export default Login;