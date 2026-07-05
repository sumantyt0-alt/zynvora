import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      instructor,
      category,
      level,
      price,
      thumbnail,
      duration,
    } = req.body;

    const course = await Course.create({
      title,
      description,
      instructor,
      category,
      level,
      price,
      thumbnail,
      duration,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};