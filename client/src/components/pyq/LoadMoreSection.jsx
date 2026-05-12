function LoadMoreSection() {
  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      <button
        className="
          rounded-2xl
          bg-slate-200
          px-10
          py-4
          text-sm
          font-semibold
          text-slate-800
          transition
          hover:bg-slate-300
          dark:bg-slate-800
          dark:text-slate-200
          dark:hover:bg-slate-700
        "
      >
        Load More Questions
      </button>

      <p className="text-xs uppercase tracking-widest text-slate-500">
        Showing 6 of 142 Papers
      </p>
    </div>
  );
}

export default LoadMoreSection;
