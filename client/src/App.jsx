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

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <Routes>
      <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

      {/* Public Pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/contact" element={<Contact />} />

      {/* Register */}
        

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* Protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-learning"
        element={
          <ProtectedRoute>
            <MyLearning />
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/admin/add-course"
        element={
          <AdminRoute>
            <AddCourse />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/edit-course/:id"
        element={
          <AdminRoute>
            <AddCourse />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/courses"
        element={
          <AdminRoute>
            <ManageCourses />
          </AdminRoute>
        }
      />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;