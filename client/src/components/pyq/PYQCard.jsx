import { Eye, Download, BookOpen } from "lucide-react";

function PYQCard({ title, subject, fileUrl, year, semester, course }) {
  return (
    <div
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-3xl border border-slate-200/80
        bg-white/90 p-5 shadow-sm
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-blue-200
        hover:shadow-2xl
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      {/* Top Glow */}
      <div
        className="
          absolute inset-x-0 top-0 h-1
          bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-11 w-11 items-center justify-center
              rounded-2xl bg-blue-100
              text-blue-600
              transition-transform duration-300
              group-hover:scale-105
              dark:bg-blue-500/10
              dark:text-blue-400
            "
          >
            <BookOpen size={20} />
          </div>

          <div>
            <p
              className="
                text-xs font-semibold uppercase tracking-wide
                text-blue-600
                dark:text-blue-400
              "
            >
              Previous Year Question
            </p>

            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              MAKAUT University
            </p>
          </div>
        </div>
        {year && (
          <span
            className="
                rounded-full bg-emerald-100
                px-3 py-1 text-xs font-medium
                text-emerald-700
                dark:bg-emerald-500/10
                dark:text-emerald-400
              "
          >
            {year}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3
          className="
            line-clamp-2 text-lg font-bold leading-snug
            text-slate-900 transition-colors duration-200
            group-hover:text-blue-600
            dark:text-white
          "
        >
          {subject || "Untitled Subject"}
        </h3>

        <p
          className="
            mt-2 line-clamp-2
            text-sm leading-relaxed
            text-slate-600
            dark:text-slate-400
          "
        >
          {title || "No title available"}
        </p>

        {/* Metadata */}
        <div className="mt-4 flex flex-wrap gap-2">
          {course && (
            <span
              className="
                rounded-full bg-slate-100
                px-3 py-1 text-xs font-medium
                text-slate-700
                dark:bg-slate-800
                dark:text-slate-300
              "
            >
              {course}
            </span>
          )}

          {semester && (
            <span
              className="
                rounded-full bg-blue-100
                px-3 py-1 text-xs font-medium
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              Semester {semester}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        className="
          mt-6 flex items-center gap-3
          border-t border-slate-100 pt-5
          dark:border-slate-800
        "
      >
        {/* View Button */}
        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="View PDF"
          className="
            flex flex-1 items-center justify-center gap-2
            rounded-2xl bg-blue-600
            px-4 py-3 text-sm font-semibold
            text-white shadow-sm
            transition-all duration-200
            hover:bg-blue-700
            hover:shadow-lg
            active:scale-[0.98]
          "
        >
          <Eye size={18} />
          View PDF
        </a>

        {/* Download Button */}
        <a
          href={`${fileUrl}?fl_attachment=true`}
          target="_blank"
          rel="noreferrer"
          aria-label="Download PDF"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-2xl border border-slate-200
            bg-slate-50 text-slate-700
            transition-all duration-200
            hover:-translate-y-0.5
            hover:bg-slate-100
            hover:shadow-md
            active:scale-95
            dark:border-slate-800
            dark:bg-slate-900
            dark:text-slate-300
            dark:hover:bg-slate-800
          "
        >
          <Download size={18} />
        </a>
      </div>
    </div>
  );
}

export default PYQCard;
