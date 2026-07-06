import Enrollment from "../models/Enrollment.js";

export const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    const alreadyEnrolled = await Enrollment.findOne({
      student: req.user.id,
      course: courseId,
    });

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

    res.status(201).json({
      success: true,
      message: "Enrollment successful",
      enrollment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};