function CourseHero({ course }) {
  return (
    <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold">
          {course.title}
        </h1>

        <p className="mt-6 text-xl">
          {course.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-6">
          <span>👨‍🏫 {course.instructor}</span>

          <span>📚 {course.category}</span>

          <span>🎯 {course.level}</span>

          <span>⏱️ {course.duration}</span>
        </div>
      </div>
    </section>
  );
}

export default CourseHero;