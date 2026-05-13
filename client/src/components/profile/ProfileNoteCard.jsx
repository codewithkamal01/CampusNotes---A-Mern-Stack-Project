import { Eye, Download, FileText, CalendarDays, Trash2 } from "lucide-react";

function ProfileNoteCard({ note, onDelete, deletingId }) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-3xl
        border border-slate-200/80
        bg-white/90
        p-5 backdrop-blur
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-950/90
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-blue-500/[0.03]
          via-transparent
          to-violet-500/[0.03]
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Top */}
      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <div
          className="
      flex h-12 w-12 shrink-0
      items-center justify-center
      rounded-2xl
      bg-slate-100
      text-slate-700
      dark:bg-slate-900
      dark:text-slate-300
    "
        >
          <FileText size={22} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="
          rounded-full
          bg-slate-100
          px-3 py-1
          text-xs font-medium
          text-slate-600
          dark:bg-slate-900
          dark:text-slate-300
        "
            >
              {note?.year || "-"}
            </span>

            <span
              className="
          rounded-full
          bg-blue-100
          px-3 py-1
          text-xs font-medium
          text-blue-700
          dark:bg-blue-950/40
          dark:text-blue-400
        "
            >
              {note?.uploadType || "Note"}
            </span>
          </div>

          {/* Semester */}
          <div
            className="
        mt-3 flex items-center
        gap-1.5 text-sm
        text-slate-500
        dark:text-slate-400
      "
          >
            <CalendarDays size={15} />
            Semester {note?.semester || "-"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-5">
        <h3
          className="
            line-clamp-2
            text-lg font-bold
            leading-snug
            text-slate-900
            transition-colors
            group-hover:text-blue-600
            dark:text-white
            dark:group-hover:text-blue-400
          "
        >
          {note?.title}
        </h3>

        <p
          className="
            mt-2 line-clamp-1
            text-sm font-medium
            text-slate-500
            dark:text-slate-400
          "
        >
          {note?.subject}
        </p>
      </div>

      {/* Footer */}
      <div className="relative mt-6 flex items-center gap-3">
        <a
          href={note?.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
    flex flex-1 items-center
    justify-center gap-2
    rounded-2xl
    bg-blue-600
    px-4 py-3
    text-sm font-semibold
    text-white
    shadow-md shadow-blue-500/20
    transition-all duration-200
    hover:bg-blue-700
    hover:shadow-lg
    active:scale-[0.98]
  "
        >
          <Eye size={17} />
          View Note
        </a>

        {/* Download */}
        <a
          href={note?.fileUrl}
          download
          target="_blank"
          className="
    flex h-12 w-12
    items-center justify-center
    rounded-2xl
    border border-slate-200
    bg-slate-100
    text-slate-700
    transition-all duration-200
    hover:scale-105
    hover:bg-slate-200
    dark:border-slate-800
    dark:bg-slate-900
    dark:text-slate-300
    dark:hover:bg-slate-800
  "
        >
          <Download size={18} />
        </a>
        <button
  onClick={() => onDelete(note._id)}
  disabled={deletingId === note._id}
  className="
    flex h-12 w-12
    items-center justify-center
    rounded-2xl
    border border-red-200
    bg-red-50
    text-red-600
    transition-all duration-200
    hover:scale-105
    hover:bg-red-100
    disabled:cursor-not-allowed
    disabled:opacity-60

    dark:border-red-900/40
    dark:bg-red-950/30
    dark:text-red-400
    dark:hover:bg-red-900/40
  "
>
  <Trash2 size={18} />
</button>
      </div>
    </div>
  );
}

export default ProfileNoteCard;
