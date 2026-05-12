function PYQHeader() {
  return (
    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-2">
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
          Academic Archive
        </span>
      </div>

      <h1
        className="
          mb-4
          text-4xl
          font-extrabold
          tracking-tight
          text-slate-900
          dark:text-white
        "
      >
        Previous Year Questions
      </h1>

      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        Access verified exam papers curated by the academic community. Prepare
        smarter with recurring patterns and important questions.
      </p>
    </div>
  );
}

export default PYQHeader;
