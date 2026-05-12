import UploadInput from "./UploadInput";
import UploadSelect from "./UploadSelect";
import UploadTextarea from "./UploadTextarea";
import FileUploadBox from "./FileUploadBox";
import UploadActions from "./UploadActions";

function UploadForm({
  formData,
  handleChange,
  handleFileChange,
  file,
  handleSubmit,
  loading,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <UploadSelect
          label="Upload Type"
          name="uploadType"
          value={formData.uploadType}
          onChange={handleChange}
          options={[
            {
              label: "Select type",
              value: "",
            },
            {
              label: "Class Notes",
              value: "Class Notes",
            },

            {
              label: "PYQ",
              value: "PYQ",
            },

            {
              label: "Others",
              value: "Others",
            },
          ]}
        />

        <UploadInput
          label="Course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="e.g. BCA"
        />

        <UploadSelect
          label="Semester"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          options={[
            {
              label: "Select Semester",
              value: "",
            },

            ...[...Array(8)].map((_, index) => ({
              label: `Semester ${index + 1}`,
              value: index + 1,
            })),
          ]}
        />

        <UploadInput
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Data Structures"
        />

        <UploadInput
          label="Year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="2025"
          type="number"
        />

        <UploadInput
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter content title"
        />
      </div>

      <FileUploadBox file={file} onChange={handleFileChange} />

      <UploadActions loading={loading} />
    </form>
  );
}

export default UploadForm;
