import React, { useState } from 'react';
import { Users, Video, BookOpen, UserPlus, Trash2, LogOut, Plus } from 'lucide-react';
import { supabase } from "../utils/supabaseClient.js";


function AdminPage() {
  const [students, setStudents] = useState([]);
  const [videos, setVideos] = useState([]);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');


  // Form states
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [videoForm, setVideoForm] = useState({
    youtubeLink: '',
    title: '',
    description: ''
  });

  const [moduleForm, setModuleForm] = useState({
    title: '',
    time: '',
    videoCount: ''
  });

  // Student management functions
 const handleAddStudent = async () => {
  const { name, email, phone, password } = studentForm;

  if (name && email && phone && password) {
    setLoading(true);        // optional: if you have loading state
    setErrorMessage("");     // optional: clear previous errors

    try {
      // 1. Sign up with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, phone },  // store extra info as user metadata
        },
      });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      // 2. If signup successful, add student locally
      const newStudent = {
        id: Date.now(),
        name,
        email,
        phone,
        password,  // consider NOT storing password here for security reasons
        userId: data.user?.id, // link to Supabase user ID if needed
      };

      setStudents(prev => [...prev, newStudent]);

      // 3. Reset the form
      setStudentForm({ name: "", email: "", phone: "", password: "" });

      // 4. Optionally notify user
      alert("Signup successful! Please verify your email.");
    } catch (err) {
      setErrorMessage("Unexpected error occurred.");
    }

    setLoading(false);
  } else {
    setErrorMessage("Please fill all required fields.");
  }
};

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Video management functions
  // const handleAddVideo = () => {
  //   if (videoForm.youtubeLink && videoForm.title && videoForm.description) {
  //     const newVideo = {
  //       id: Date.now(),
  //       ...videoForm
  //     };
  //     setVideos([...videos, newVideo]);
  //     setVideoForm({ youtubeLink: '', title: '', description: '' });
  //   }
  // };


  const handleAddVideo = async () => {
  const { youtubeLink, title, description } = videoForm;

  if (youtubeLink && title && description) {
    try {
      const { data, error } = await supabase.from("videos").insert([
        {
          youtube_link: youtubeLink,
          title,
          description
        }
      ]);

      if (error) {
        console.error("Error adding video:", error.message);
        return;
      }

      // Optional: Fetch updated video list or update local state
      const newVideo = {
        id: data[0].id,
        youtubeLink,
        title,
        description,
        createdAt: data[0].created_at,
      };

      setVideos((prev) => [...prev, newVideo]);

      // Reset form
      setVideoForm({ youtubeLink: '', title: '', description: '' });

      alert("Video added successfully!");
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  } else {
    alert("Please fill all fields.");
  }
};

  // Module management functions
  const handleAddModule = () => {
    if (moduleForm.title && moduleForm.time && moduleForm.videoCount) {
      const newModule = {
        id: Date.now(),
        ...moduleForm
      };
      setModules([...modules, newModule]);
      setModuleForm({ title: '', time: '', videoCount: '' });
    }
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage students, videos, and course modules</p>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Add Student Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <UserPlus className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Add Student</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={studentForm.name}
                  onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter student name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter place"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={studentForm.phone}
                  onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={studentForm.password}
                  onChange={(e) => setStudentForm({ ...studentForm, password: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter password"
                />
              </div>
              <button
                onClick={handleAddStudent}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Add Student</span>
              </button>
            </div>
          </div>

          {/* Manage Students Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Manage Students</h2>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {students.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No students added yet</p>
                </div>
              ) : (
                students.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.place} • {student.phone}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Add Video Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <Video className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Add Video</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">YouTube Link</label>
                <input
                  type="url"
                  value={videoForm.youtubeLink}
                  onChange={(e) => setVideoForm({ ...videoForm, youtubeLink: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={videoForm.title}
                  onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter video title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={videoForm.description}
                  onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter video description"
                />
              </div>
              <button
  onClick={!loading ? handleAddVideo : undefined}
  disabled={loading}
  className={`w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
>
  {loading ? (
    <span>Adding...</span>
  ) : (
    <>
      <Plus className="h-4 w-4" />
      <span>Add Video</span>
    </>
  )}
</button>

            </div>
          </div>

          {/* Add Course Module Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Add Course Module</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={moduleForm.title}
                  onChange={(e) => setModuleForm({ ...moduleForm, title: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter module title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time (Duration)</label>
                <input
                  type="text"
                  value={moduleForm.time}
                  onChange={(e) => setModuleForm({ ...moduleForm, time: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., 2 hours 30 minutes"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Video Count</label>
                <input
                  type="number"
                  value={moduleForm.videoCount}
                  onChange={(e) => setModuleForm({ ...moduleForm, videoCount: e.target.value })}
                  className="text-gray-950 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter number of videos"
                  min="0"
                />
              </div>
              <button
                onClick={handleAddModule}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Add Module</span>
              </button>
            </div>
          </div>
        </div>

        {/* Added Content Summary */}
        {(videos.length > 0 || modules.length > 0) && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Videos List */}
            {videos.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Added Videos</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {videos.map((video) => (
                    <div key={video.id} className="p-4 bg-gray-50 rounded-lg border">
                      <h4 className="font-semibold text-gray-900">{video.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{video.description}</p>
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

            {/* Modules List */}
            {modules.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Modules</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {modules.map((module) => (
                    <div key={module.id} className="p-4 bg-gray-50 rounded-lg border">
                      <h4 className="font-semibold text-gray-900">{module.title}</h4>
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