import { CloudUpload } from "lucide-react";

function FileUploadBox({ file, onChange }) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-xs
          font-bold
          uppercase
          tracking-widest
          text-slate-500
        "
      >
        Attach File
      </label>

      <label
        className="
          group
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-slate-300
          bg-slate-50
          px-6
          py-14
          text-center
          transition-all
          hover:border-blue-400
          hover:bg-blue-50/40
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <div
          className="
            mb-4
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-blue-100
            text-blue-600
            transition-transform
            group-hover:scale-110
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          <CloudUpload size={30} />
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Drag & Drop files here
        </h3>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          PDF or DOCX up to 50MB
        </p>

        {file && (
          <p className="mt-4 text-sm font-semibold text-blue-600">
            {file.name}
          </p>
        )}
        <input type="file" className="hidden" onChange={onChange} />
      </label>
    </div>
  );
}

export default FileUploadBox;
