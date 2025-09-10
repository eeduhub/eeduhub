import React, { useState } from "react";
import {
  Users,
  Video,
  BookOpen,
  UserPlus,
  LogOut,
  Plus,
} from "lucide-react";
import { supabase } from "../utils/supabaseClient.js";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // --- Form states ---
  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [videoForm, setVideoForm] = useState({
    youtubeLink: "",
    title: "",
    description: "",
  });

  const [moduleForm, setModuleForm] = useState({
    title: "",
    time: "",
    videoCount: "",
  });

  // --- Success handler ---
  const showSuccess = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 3000); // clear after 3s
  };

  // --- Student Management ---
  const handleAddStudent = async () => {
    const { name, email, phone, password } = studentForm;

    if (name && email && phone && password) {
      setLoading(true);
      setErrorMessage("");

      try {
        // 1. Sign up with Supabase Auth
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name, phone } },
        });

        if (error) {
          setErrorMessage(error.message);
          setLoading(false);
          return;
        }

        // 2. Add student locally
        const newStudent = {
          id: Date.now(),
          name,
          email,
          phone,
          userId: data.user?.id,
        };
        setStudents((prev) => [...prev, newStudent]);

        // 3. Reset form
        setStudentForm({ name: "", email: "", phone: "", password: "" });

        // 4. Show success
        showSuccess("✅ Student added successfully! Please verify email.");
      } catch (err) {
        setErrorMessage("Unexpected error occurred.");
      }

      setLoading(false);
    } else {
      setErrorMessage("Please fill all required fields.");
    }
  };



const handleAddVideo = async () => {
  const { youtubeLink, title, description } = videoForm;

  if (youtubeLink && title && description) {
    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase
        .from("videos")
        .insert([
          {
            youtube_link: youtubeLink,
            title,
            description,
          },
        ])
        .select(); // 👈 Force Supabase to return inserted row

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      if (data && data.length > 0) {
        const newVideo = {
          id: data[0].id,
          youtubeLink,
          title,
          description,
          createdAt: data[0].created_at,
        };

        setVideos((prev) => [...prev, newVideo]);

        // Reset form
        setVideoForm({ youtubeLink: "", title: "", description: "" });

        // Show success
        showSuccess("🎥 Video added successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorMessage("Unexpected error occurred.");
    }

    setLoading(false);
  } else {
    setErrorMessage("Please fill all fields.");
  }
};


  // --- Module Management ---
  const handleAddModule = () => {
    if (moduleForm.title && moduleForm.time && moduleForm.videoCount) {
      const newModule = {
        id: Date.now(),
        ...moduleForm,
      };
      setModules((prev) => [...prev, newModule]);

      // Reset form
      setModuleForm({ title: "", time: "", videoCount: "" });

      // Show success
      showSuccess("📘 Module added successfully!");
    } else {
      setErrorMessage("Please fill all fields.");
    }
  };

  // --- Logout ---
  const handleLogout = () => {
    localStorage.removeItem("eeduhub_admin");
    navigate("/AdminLogin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center s">

              <div>
                <h1 className="text-base md:text-3xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">
                  Manage students, videos, and course modules
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
        {/* Error / Success messages */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            ❌ {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Student */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <UserPlus className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-base md:text-2xl font-bold text-gray-900">Add Student</h2>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={studentForm.name}
                onChange={(e) =>
                  setStudentForm({ ...studentForm, name: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Enter student name"
              />
              <input
                type="email"
                value={studentForm.email}
                onChange={(e) =>
                  setStudentForm({ ...studentForm, email: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Enter email"
              />
              <input
                type="tel"
                value={studentForm.phone}
                onChange={(e) =>
                  setStudentForm({ ...studentForm, phone: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Enter phone number"
              />
              <input
                type="password"
                value={studentForm.password}
                onChange={(e) =>
                  setStudentForm({ ...studentForm, password: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Enter password"
              />
              <button
                onClick={handleAddStudent}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>{loading ? "Adding..." : "Add Student"}</span>
              </button>
            </div>
          </div>

          {/* Add Video */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <Video className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-base md:text-2xl font-bold text-gray-900">Add Video</h2>
            </div>
            <div className="space-y-4">
              <input
                type="url"
                value={videoForm.youtubeLink}
                onChange={(e) =>
                  setVideoForm({ ...videoForm, youtubeLink: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="YouTube Link"
              />
              <input
                type="text"
                value={videoForm.title}
                onChange={(e) =>
                  setVideoForm({ ...videoForm, title: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Enter video title"
              />
              <textarea
                value={videoForm.description}
                onChange={(e) =>
                  setVideoForm({ ...videoForm, description: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Enter description"
              />
              <button
                onClick={handleAddVideo}
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>{loading ? "Adding..." : "Add Video"}</span>
              </button>
            </div>
          </div>

          {/* Add Module */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-base md:text-2xl font-bold text-gray-900">
                Add Course Module
              </h2>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={moduleForm.title}
                onChange={(e) =>
                  setModuleForm({ ...moduleForm, title: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Module title"
              />
              <input
                type="text"
                value={moduleForm.time}
                onChange={(e) =>
                  setModuleForm({ ...moduleForm, time: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Duration"
              />
              <input
                type="number"
                value={moduleForm.videoCount}
                onChange={(e) =>
                  setModuleForm({ ...moduleForm, videoCount: e.target.value })
                }
                className="text-gray-950 w-full px-4 py-3 border rounded-lg"
                placeholder="Video count"
                min="0"
              />
              <button
                onClick={handleAddModule}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Add Module</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Summary */}
        {(videos.length > 0 || modules.length > 0) && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Added Videos
                </h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="p-4 bg-gray-50 rounded-lg border"
                    >
                      <h4 className="font-semibold text-gray-900">
                        {video.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {video.description}
                      </p>
                      <a
                        href={video.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 mt-2 inline-block"
                      >
                        View on YouTube →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {modules.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Course Modules
                </h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {modules.map((module) => (
                    <div
                      key={module.id}
                      className="p-4 bg-gray-50 rounded-lg border"
                    >
                      <h4 className="font-semibold text-gray-900">
                        {module.title}
                      </h4>
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <span>Duration: {module.time}</span>
                        <span>{module.videoCount} videos</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
