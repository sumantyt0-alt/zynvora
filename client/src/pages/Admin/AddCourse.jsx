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
          instructor: data.course.instructor || "",
          category: data.course.category || "",
          level: data.course.level || "",
          price: data.course.price || "",
          thumbnail: data.course.thumbnail || "",
          duration: data.course.duration || "",
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

    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const imageUrl = await uploadImage();

      const courseData = {
        ...form,
        thumbnail: imageUrl,
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