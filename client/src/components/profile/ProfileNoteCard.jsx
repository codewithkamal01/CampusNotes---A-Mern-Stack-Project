import { Eye, Download } from "lucide-react";

function ProfileNoteCard({ note }) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        transition-all
        hover:-translate-y-1
        hover:shadow-lg
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <div className="flex items-center justify-between">
        <span
          className="
            rounded-full
            bg-blue-100
            px-3
            py-1
            text-xs
            font-semibold
            text-blue-600
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          {note.year}
        </span>

        <span className="text-xs text-slate-400">Semester {note.semester}</span>
      </div>

      <h3
        className="
          mt-5
          line-clamp-2
          text-lg
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        {note.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        {note.subject}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          className="
            flex-1
            rounded-2xl
            bg-blue-600
            py-3
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
        </button>

        <button
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
        </button>
      </div>
    </div>
  );
}

export default ProfileNoteCard;
