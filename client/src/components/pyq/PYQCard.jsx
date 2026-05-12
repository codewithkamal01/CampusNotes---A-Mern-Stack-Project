import { Eye, Download } from "lucide-react";

function PYQCard({ title, subject, course, semester, year, fileUrl }) {
  return (
    <div
      className="
        group
        flex
        flex-col
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      {/* Year Badge */}
      <div className="mb-5 flex items-center justify-between">
        <span
          className="
            rounded-full
            bg-blue-100
            px-3
            py-1
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-blue-700
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          {year}
        </span>

        <span className="text-xs font-medium text-slate-400">MAKAUT</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3
          className="
            line-clamp-2
            text-lg
            font-bold
            tracking-tight
            text-slate-900
            transition-colors
            group-hover:text-blue-600
            dark:text-white
          "
        >
          {title}
        </h3>

        <p className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-400">
          {subject}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className="
              rounded-full
              bg-slate-100
              px-3
              py-1
              text-xs
              font-medium
              text-slate-600
              dark:bg-slate-900
              dark:text-slate-400
            "
          >
            {course}
          </span>

          <span
            className="
              rounded-full
              bg-slate-100
              px-3
              py-1
              text-xs
              font-medium
              text-slate-600
              dark:bg-slate-900
              dark:text-slate-400
            "
          >
            Semester {semester}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div
        className="
          mt-6
          flex
          items-center
          gap-3
          border-t
          border-slate-100
          pt-5
          dark:border-slate-800
        "
      >
        {/* View */}
        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          className="
            flex-1
            rounded-2xl
            bg-blue-600
            py-3
            text-center
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          <span className="flex items-center justify-center gap-2">
            <Eye size={16} />
            View
          </span>
        </a>

        {/* Download */}
        <a
          href={fileUrl}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-slate-100
            text-slate-700
            transition
            hover:bg-slate-200
            dark:bg-slate-900
            dark:text-slate-300
          "
        >
          <Download size={18} />
        </a>
      </div>
    </div>
  );
}

export default PYQCard;
