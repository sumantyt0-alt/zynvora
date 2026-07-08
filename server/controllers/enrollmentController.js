import Enrollment from "../models/Enrollment.js";

export const enrollCourse = async (req, res) => {
  console.log("Enroll API Called");
  console.log("Course ID:", req.body.courseId);
  console.log("User:", req.user.id);

  try {
    const { courseId } = req.body;

    const alreadyEnrolled = await Enrollment.findOne({
      student: req.user.id,
      course: courseId,
    });

    console.log("Already Enrolled:", alreadyEnrolled);

    if (alreadyEnrolled) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled in this course",
      });
    }

    const enrollment = await Enrollment.create({
      student: req.user.id,
      course: courseId,
    });

    return res.status(201).json({
      success: true,
      message: "Enrollment successful",
      enrollment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      student: req.user.id,
    }).populate("course");

    const courses = enrollments.map((item) => item.course);

    return res.status(200).json({
      success: true,
      count: courses.length,
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};