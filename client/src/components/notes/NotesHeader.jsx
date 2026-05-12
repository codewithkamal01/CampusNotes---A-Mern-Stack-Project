function NotesHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Academic Repository
        </h1>

        <p className="text-slate-600 dark:text-slate-400">
          Browse verified student notes and curated study material.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
          2,450 Notes
        </span>

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          New Updates
        </span>
      </div>
    </div>
  );
}

export default NotesHeader;
