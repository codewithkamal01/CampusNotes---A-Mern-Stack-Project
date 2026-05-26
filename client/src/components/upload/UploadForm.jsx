import {
  FileText,
  FolderOpen,
  GraduationCap,
  UploadCloud,
  BookOpen,
  CalendarDays,
  Layers3,
  FileArchive,
} from "lucide-react";

import UploadInput from "./UploadInput";
import UploadSelect from "./UploadSelect";
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
  const uploadTypes = [
    {
      label: "Class Notes",
      value: "Class Notes",
      desc: "Lecture notes & study materials",
      icon: BookOpen,
    },
    {
      label: "PYQ",
      value: "PYQ",
      desc: "Previous year question papers",
      icon: FileText,
    },
    {
      label: "Others",
      value: "Others",
      desc: "Assignments & resources",
      icon: FolderOpen,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-6xl space-y-7">
      {/* Upload Type */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            Select Upload Type
          </h2>

          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Choose the category that best matches your upload.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {uploadTypes.map((type) => {
            const Icon = type.icon;

            const active = formData.uploadType === type.value;

            return (
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
                className={`
          group
          flex
          items-center
          gap-3
          rounded-2xl
          border
          px-4
          py-3
          text-left
          transition-all
          duration-200

          ${
            active
              ? `
                border-blue-500
                bg-blue-600
                text-white
                shadow-lg
                shadow-blue-500/20
              `
              : `
                border-zinc-200
                bg-white
                hover:border-blue-300
                hover:bg-blue-50

                dark:border-zinc-800
                dark:bg-zinc-900
                dark:hover:border-blue-500/50
                dark:hover:bg-zinc-800
              `
          }
        `}
              >
                {/* Icon */}
                <div
                  className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border

            ${
              active
                ? `
                  border-white/10
                  bg-white/10
                `
                : `
                  border-zinc-200
                  bg-zinc-50

                  dark:border-zinc-700
                  dark:bg-zinc-800
                `
            }
          `}
                >
                  <Icon
                    className={`
              h-5
              w-5

              ${active ? "text-white" : "text-blue-600 dark:text-blue-400"}
            `}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3
                    className={`
              truncate
              text-sm
              font-semibold

              ${active ? "text-white" : "text-zinc-800 dark:text-zinc-100"}
            `}
                  >
                    {type.label}
                  </h3>

                  <p
                    className={`
              mt-0.5
              truncate
              text-xs

              ${active ? "text-blue-100" : "text-zinc-500 dark:text-zinc-400"}
            `}
                  >
                    {type.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Details */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-8 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-500/10">
            <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Content Details
            </h2>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Provide accurate details for better discoverability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <UploadInput
            icon={FileArchive}
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. DSA Unit 1 Notes"
          />

          <UploadInput
            icon={BookOpen}
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Data Structures"
          />

          {formData.uploadType === "PYQ" && (
            <>
              <UploadInput
                icon={GraduationCap}
                label="Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="e.g. BCA"
              />

              <UploadSelect
                icon={Layers3}
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
                icon={CalendarDays}
                label="Year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="2025"
                type="number"
              />
            </>
          )}
        </div>
      </section>

      {/* Upload */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-500/10">
            <UploadCloud className="h-6 w-6 text-violet-600 dark:text-violet-400" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Upload Your File
            </h2>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Drag & drop or browse your file from device.
            </p>
          </div>
        </div>

        <FileUploadBox file={file} onChange={handleFileChange} />
      </section>

      {/* Actions */}
      <div className="pt-2">
        <UploadActions loading={loading} />
      </div>
    </form>
  );
}

export default UploadForm;
