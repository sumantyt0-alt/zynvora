import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import AddCourse from "./pages/Admin/AddCourse";
import ManageCourses from "./pages/Admin/ManageCourses";
import MyLearning from "./pages/MyLearning/MyLearning";

function App() {
  return (
    <Routes>
      <Route
        path="/admin/edit-course/:id"
        element={<AddCourse />}
      />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/admin/add-course" element={<AddCourse />} />
      <Route path="/admin/courses" element={<ManageCourses />} />
      <Route path="/my-learning" element={<MyLearning />} />
    </Routes>
  );
}

export default App;