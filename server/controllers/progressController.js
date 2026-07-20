import Progress from "../models/Progress.js";
import Course from "../models/Course.js";

export const markLessonComplete = async (req, res) => {
  try {
    const { courseId, lessonIndex } = req.body;

    let progress = await Progress.findOne({
      user: req.user.id,
      course: courseId,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user.id,
        course: courseId,
        completedLessons: [],
      });
    }

    if (!progress.completedLessons.includes(lessonIndex)) {
      progress.completedLessons.push(lessonIndex);
    }

    const course = await Course.findById(courseId);

    progress.progress = Math.round(
      (progress.completedLessons.length / course.lessons.length) * 100
    );

    await progress.save();

    res.json({
      success: true,
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user: req.user.id,
      course: req.params.courseId,
    });

    res.json({
      success: true,
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};