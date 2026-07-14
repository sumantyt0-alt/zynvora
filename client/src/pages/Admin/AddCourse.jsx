import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../services/api";

function AddCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    instructor: "",
    category: "",
    level: "",
    price: "",
    thumbnail: "",
    duration: "",
    lessons: [
      {
        title: "",
        videoUrl: "",
        duration: "",
        isPreview: false,
      },
    ],
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchCourse = async () => {
      try {
        const { data } = await API.get(`/courses/${id}`);

        setForm({
          title: data.course.title || "",
          description: data.course.description || "",
          instructor:
           data.course.instructor?.name ||
           data.course.instructor || "",
          category: data.course.category || "",
          level: data.course.level || "",
          price: data.course.price || "",
          thumbnail: data.course.thumbnail || "",
          duration: data.course.duration || "",
          lessons:
            data.course.lessons?.length > 0
              ? data.course.lessons
              : [
                  {
                    title: "",
                    videoUrl: "",
                    duration: "",
                    isPreview: false,
                  },
                ],
        });

        setPreview(data.course.thumbnail);
      } catch {
        toast.error("Failed to load course");
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLessonChange = (index, field, value) => {
    const updatedLessons = [...form.lessons];
    updatedLessons[index][field] = value;
    setForm({
      ...form,
      lessons: updatedLessons,
    });
  };

  const addLesson = () => {
    setForm({
      ...form,
      lessons: [
        ...form.lessons,
        {
          title: "",
          videoUrl: "",
          duration: "",
          isPreview: false,
        }
      ]
    });
  };

  const removeLesson = (index) => {

    if(form.lessons.length === 1){
      toast.error("At least one lesson required");
      return;
    }
    const updatedLessons = form.lessons.filter((_, i) => i !== index);
    setForm({
      ...form,
      lessons: updatedLessons,
    });
  };

  const uploadImage = async () => {
    if (!thumbnail) return form.thumbnail;

    const imageData = new FormData();

    imageData.append("file", thumbnail);
    imageData.append("upload_preset", "zynvora");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/xboxecqr/image/upload",
      {
        method: "POST",
        body: imageData,
      }
    );

    const data = await response.json();

    if(!data.secure_url){
      throw new Error("Image upload failed");
    }
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if(!token){
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const imageUrl = await uploadImage();
      const filteredLessons = form.lessons.filter(
        (lesson) => lesson.title && lesson.videoUrl && lesson.duration
      );

      const convertYoutubeUrl = (url) => {
        if (!url) return "";

        if (url.includes("youtu.be/")) {
          const id = url.split("youtu.be/")[1].split("?")[0];
          return `https://www.youtube.com/embed/${id}`;
        }

        if (url.includes("watch?v=")) {
          const id = url.split("watch?v=")[1].split("&")[0];
          return `https://www.youtube.com/embed/${id}`;
        }

        if (url.includes("youtube.com/shorts/")) {
          const id = url.split("shorts/")[1].split("?")[0];
          return `https://www.youtube.com/embed/${id}`;
        }

        return url;
      };

      const courseData = {
        ...form,
        price: Number(form.price),
        thumbnail: imageUrl,
        lessons: filteredLessons.map((lesson)=>({
          ...lesson,
          videoUrl: convertYoutubeUrl(lesson.videoUrl)
        })),
      };

      let response;

      if (id) {
        response = await API.put(`/courses/${id}`, courseData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await API.post("/courses", courseData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      toast.success(response.data.message);

      navigate("/admin/courses");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
    return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          {id ? "✏ Edit Course" : "➕ Add New Course"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Course Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="instructor"
            placeholder="Instructor"
            value={form.instructor}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration (Example: 8 Weeks)"
            value={form.duration}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <div>
            <label className="block font-semibold mb-2">
              Upload Thumbnail
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setThumbnail(e.target.files[0]);

                if (e.target.files[0]) {
                  setPreview(
                    URL.createObjectURL(e.target.files[0])
                  );
                }
              }}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {preview && (
            <div>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg border"
              />
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-5">
              📚 Course Lessons
            </h2>

            {form.lessons.map((lesson, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 mb-5 bg-gray-50"
              >
                <h3 className="font-bold mb-4">
                  Lesson {index + 1}
                </h3>

                <input
                  type="text"
                  placeholder="Lesson Title"
                  value={lesson.title}
                  onChange={(e) =>
                    handleLessonChange(index, "title", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 mb-3"
                />

                <input
                  type="text"
                  placeholder="Video URL"
                  value={lesson.videoUrl}
                  onChange={(e) =>
                    handleLessonChange(index, "videoUrl", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 mb-3"
                />

                <input
                  type="text"
                  placeholder="Duration"
                  value={lesson.duration}
                  onChange={(e) =>
                    handleLessonChange(index, "duration", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 mb-3"
                />

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={lesson.isPreview}
                    onChange={(e) =>
                      handleLessonChange(index, "isPreview", e.target.checked)
                    }
                  />
                  Preview Lesson
                </label>

                {form.lessons.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeLesson(index)}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Remove Lesson
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addLesson}
              className="bg-green-600 text-white px-5 py-3 rounded-lg"
            >
              + Add Lesson
            </button>
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading
              ? id
                ? "Updating..."
                : "Creating..."
              : id
              ? "Update Course"
              : "Create Course"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddCourse;