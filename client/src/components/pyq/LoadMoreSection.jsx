import { Loader2 } from "lucide-react";

function LoadMoreSection({
  visibleCount,
  totalCount,
  onLoadMore,
  loading = false,
}) {
  const hasMore = visibleCount < totalCount;

  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      {hasMore ? (
        <button
          onClick={onLoadMore}
          disabled={loading}
          className="
            flex items-center gap-2
            rounded-2xl
            bg-slate-900
            px-8 py-4
            text-sm font-semibold
            text-white
            shadow-sm
            transition-all duration-200
            hover:scale-[1.02]
            hover:bg-slate-800
            active:scale-[0.98]
            disabled:cursor-not-allowed
            disabled:opacity-70
            dark:bg-white
            dark:text-slate-900
            dark:hover:bg-slate-200
          "
        >
          {loading && <Loader2 size={16} className="animate-spin" />}

          {loading ? "Loading..." : "Load More Papers"}
        </button>
      ) : (
        <div
          className="
            rounded-2xl
            border border-slate-200
            bg-slate-100
            px-6 py-3
            text-sm font-medium
            text-slate-500
            dark:border-slate-800
            dark:bg-slate-900
            dark:text-slate-400
          "
        >
          No more papers available
        </div>
      )}

      <p
        className="
          text-xs uppercase tracking-[0.2em]
          text-slate-500
        "
      >
        Showing {visibleCount} of {totalCount} Papers
      </p>
    </div>
  );
}

export default LoadMoreSection;
