import { CalendarDays, User, Download } from "lucide-react";

function NoteCard({ image, title, subject, author, badge, fileUrl }) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-2xl
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {badge && (
          <span
            className="
              absolute
              right-4
              top-4
              rounded-full
              bg-white/90
              px-3
              py-1
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-blue-600
              backdrop-blur-md
            "
          >
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex h-[220px] flex-col p-5">
        <div>
          <h3
            className="
              line-clamp-2
              text-xl
              font-bold
              tracking-tight
              text-slate-900
              transition-colors
              group-hover:text-blue-600
              dark:text-white
            "
          >
            {subject}
          </h3>

          <p className="mt-1 line-clamp-1 text-sm text-slate-500 dark:text-slate-400">
            {title}
          </p>
        </div>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1 font-bold">
            <User size={14} />
            {author}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3 pt-4">
          {/* Open Note */}
          <a
            href={fileUrl}
            download={title}
            target="_blank"
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
            Open Note
          </a>

          <a
            href={fileUrl}
            download={title}
            target="_blank"
            className="
    flex
    h-12
    w-12
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
    </div>
  );
}

export default NoteCard;
