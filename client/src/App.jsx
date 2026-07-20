import { Routes, Route, Navigate } from "react-router-dom";

import home from "./pages/home/home";
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
import MyLearning from "./pages/learning/MyLearning";
import Quiz from "./pages/Learn/Quiz";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import AdminRoute from "./components/AdminRoute";
import Learn from "./pages/Learn/Learn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

      {/* Public Pages */}
      <Route path="/home" element={<home />} />
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

      <Route
        path="/learn/:id"
        element={
          <ProtectedRoute>
            <Learn />
          </ProtectedRoute>
        }
      />
      <Route
        path="/quiz/:id"
        element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;