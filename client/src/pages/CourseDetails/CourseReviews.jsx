function CourseReviews({ course }) {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-3xl font-bold">
        Course Description
      </h2>

      <p className="mt-5 text-gray-600 leading-8">
        {course.description}
      </p>

      <div className="mt-8 border-t pt-6">
        <h3 className="text-2xl font-bold">
          What you'll learn
        </h3>

        <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
          <li>Build real-world projects</li>
          <li>Learn industry best practices</li>
          <li>Master concepts step by step</li>
          <li>Get hands-on coding experience</li>
        </ul>
      </div>
    </div>
  );
}

export default CourseReviews;