import { useState } from "react";
import API from "../services/api";
import UploadHeader from "../components/upload/UploadHeader";
import UploadForm from "../components/upload/UploadForm";
import UploadInfoCards from "../components/upload/UploadInfoCards";
import { toast } from "sonner";

function Upload() {
  const [formData, setFormData] = useState({
    uploadType: "",
    title: "",
    subject: "",
    semester: "",
    course: "",
    year: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // File Change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.warning("Please select a file");
      return;
    }

    try {
      setLoading(true);

      const uploadData = new FormData();

      uploadData.append("title", formData.title);
      uploadData.append("subject", formData.subject);
      uploadData.append("semester", formData.semester);
      uploadData.append("course", formData.course);
      uploadData.append("year", formData.year);
      uploadData.append("uploadType", formData.uploadType);
      uploadData.append("file", file);

      const token = localStorage.getItem("token");

      const res = await API.post("/notes/upload", uploadData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(res.data.message);

      // Reset Form
      setFormData({
        uploadType: "",
        title: "",
        subject: "",
        semester: "",
        course: "",
        year: "",
      });

      setFile(null);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <main className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <UploadHeader />

          {/* Form Container */}
          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-950
              sm:p-8
              lg:p-10
            "
          >
            <UploadForm
              formData={formData}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              file={file}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>
          <UploadInfoCards />
        </div>
      </main>
    </div>
  );
}

export default Upload;
