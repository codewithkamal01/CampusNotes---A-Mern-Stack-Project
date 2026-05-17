import { useState } from "react";
import API from "../services/api";
import UploadHeader from "../components/upload/UploadHeader";
import UploadForm from "../components/upload/UploadForm";
import UploadInfoCards from "../components/upload/UploadInfoCards";
import { toast } from "sonner";

const initialFormState = {
  uploadType: "",
  title: "",
  subject: "",
  semester: "",
  course: "",
  year: "",
};

function Upload() {
  const [formData, setFormData] = useState(initialFormState);

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset PYQ fields if upload type changes
    if (name === "uploadType" && value !== "PYQ") {
      setFormData((prev) => ({
        ...prev,
        uploadType: value,
        course: "",
        semester: "",
        year: "",
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // File Change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    // Allowed file types
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    // Validate file type
    if (!allowedTypes.includes(selectedFile.type)) {
      toast.error("Only PDF, DOC, and DOCX files are allowed");
      return;
    }

    // Validate file size (10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      toast.error("File size should be under 10MB");
      return;
    }

    setFile(selectedFile);
  };

  // Form Validation
  const validateForm = () => {
    if (!formData.uploadType) {
      toast.warning("Please select upload type");
      return false;
    }

    if (!formData.title.trim()) {
      toast.warning("Title is required");
      return false;
    }

    if (!formData.subject.trim()) {
      toast.warning("Subject is required");
      return false;
    }

    if (!file) {
      toast.warning("Please select a file");
      return false;
    }

    // PYQ validation
    if (formData.uploadType === "PYQ") {
      if (!formData.course || !formData.semester || !formData.year) {
        toast.warning("Course, Semester and Year are required for PYQ");

        return false;
      }
    }

    return true;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form
    if (!validateForm()) return;

    try {
      setLoading(true);
      const uploadData = new FormData();
      uploadData.append("title", formData.title);
      uploadData.append("subject", formData.subject);
      uploadData.append("uploadType", formData.uploadType);

      // Add PYQ fields only for PYQ uploads
      if (formData.uploadType === "PYQ") {
        uploadData.append("course", formData.course);
        uploadData.append("semester", formData.semester);
        uploadData.append("year", formData.year);
      }

      // Append file
      uploadData.append("file", file);

      const token = localStorage.getItem("token");

      const res = await API.post("/notes/upload", uploadData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(res.data.message || "Note uploaded successfully");

      // Reset Form
      setFormData(initialFormState);
      setFile(null);
    } catch (error) {
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
              transition-all
              duration-300
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

          {/* Info Cards */}
          <UploadInfoCards />
        </div>
      </main>
    </div>
  );
}

export default Upload;
