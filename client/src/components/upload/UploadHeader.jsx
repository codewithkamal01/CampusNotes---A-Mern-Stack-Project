// components/upload/UploadHeader.jsx

function UploadHeader() {
  return (
    <div
      className="
        mb-10
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Upload New Note
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Share your knowledge with the student community.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          className="
            rounded-2xl
            bg-slate-200
            px-5
            py-3
            text-sm
            font-semibold
            text-slate-700
            transition
            hover:bg-slate-300
            dark:bg-slate-800
            dark:text-slate-300
          "
        >
          Drafts
        </button>

        <button
          className="
            rounded-2xl
            bg-blue-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          Guidelines
        </button>
      </div>
    </div>
  );
}

export default UploadHeader;
