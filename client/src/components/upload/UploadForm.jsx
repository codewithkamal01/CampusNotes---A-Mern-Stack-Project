import UploadInput from "./UploadInput";
import UploadSelect from "./UploadSelect";
import UploadTextArea from "./UploadTextArea";
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
        <div className="space-y-2 md:col-span-2">
  <label className="text-sm font-medium text-gray-700">
    Upload Type
  </label>

  <div className="grid grid-cols-3 gap-3">
    {[
      {
        label: "📘 Notes",
        value: "Class Notes",
      },

      {
        label: "📄 PYQ",
        value: "PYQ",
      },

      {
        label: "📁 Others",
        value: "Others",
      },
    ].map((type) => (
      <button
        key={type.value}
        type="button"
        onClick={() =>
          handleChange({
            target: {
              name: "uploadType",
              value: type.value,
            },
          })
        }
        className={`rounded-xl border p-4 text-sm font-medium transition-all duration-200 ${
          formData.uploadType === type.value
            ? "border-blue-600 bg-blue-600 text-white shadow-md"
            : "border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50"
        }`}
      >
        {type.label}
      </button>
    ))}
  </div>
</div>

        <UploadInput
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter content title"
        />

        <UploadInput
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Data Structures"
        />

        {/* Only show for PYQ */}
        {formData.uploadType === "PYQ" && (
          <>
            <UploadInput
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="e.g. BCA"
            />

            <UploadSelect
              label="Semester *"
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
              label="Year *"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="2025"
              type="number"
            />
          </>
        )}
      </div>

      <FileUploadBox file={file} onChange={handleFileChange} />

      <UploadActions loading={loading} />
    </form>
  );
}

export default UploadForm;
