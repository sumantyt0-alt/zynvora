import Course from "../models/Course.js";
import User from "../models/User.js";
import Enrollment from "../models/Enrollment.js";

export const getAdminDashboard = async (req, res) => {
  try {
    const totalCourses = await Course.countDocuments();

    const totalStudents = await User.countDocuments({
      role: "student",
    });

    const totalEnrollments = await Enrollment.countDocuments();

    const enrollments = await Enrollment.find().populate("course");

    let totalRevenue = 0;

    enrollments.forEach((enrollment) => {
      if (enrollment.course) {
        totalRevenue += enrollment.course.price;
      }
    });

    res.status(200).json({
      success: true,
      stats: {
        totalCourses,
        totalStudents,
        totalEnrollments,
        totalRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getStudentDashboard = async (req, res) => {
  try {
    const enrolledCourses = await Enrollment.find({
      student: req.user.id,
    }).populate("course");

    res.status(200).json({
      success: true,
      totalCourses: enrolledCourses.length,
      courses: enrolledCourses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};