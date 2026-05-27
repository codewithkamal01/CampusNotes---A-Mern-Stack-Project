import { useState } from "react";
import API from "../services/api";
import UploadHeader from "../components/upload/UploadHeader";
import UploadForm from "../components/upload/UploadForm";
import UploadInfoCards from "../components/upload/UploadInfoCards";
import { toast } from "sonner";
import { uploadFile } from "../utils/uploadFile";

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

    if (!validateForm()) return;

    try {
      setLoading(true);

      // Upload file to Supabase
      const uploadedFile = await uploadFile(file);

      const token = localStorage.getItem("token");
      console.log({
        title: formData.title,
        subject: formData.subject,
        uploadType: formData.uploadType,
        fileUrl: uploadedFile.fileUrl,
        filePath: uploadedFile.filePath,
      });
      // Send note data to backend
      const res = await API.post(
        "/notes/upload",
        {
          title: formData.title,
          subject: formData.subject,
          uploadType: formData.uploadType,
          course: formData.uploadType === "PYQ" ? formData.course : undefined,
          semester:
            formData.uploadType === "PYQ" ? formData.semester : undefined,
          year:
            formData.uploadType === "PYQ" ? Number(formData.year) : undefined,
          fileUrl: uploadedFile.fileUrl,
          filePath: uploadedFile.filePath,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(res.data.message || "Note uploaded successfully");

      setFormData(initialFormState);
      setFile(null);
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Upload failed",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-3 dark:bg-slate-900 md:px-6">
      <main className="px-1 py-4 sm:px-6 lg:px-10">
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
              p-4
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
