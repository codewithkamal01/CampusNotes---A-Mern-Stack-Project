// components/notes/Pagination.jsx

import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-3 py-12">
      {/* Previous */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          text-slate-500
          transition-all
          hover:border-blue-500
          hover:text-blue-600
          disabled:cursor-not-allowed
          disabled:opacity-40
          dark:border-slate-800
          dark:bg-slate-950
          dark:text-slate-400
        "
      >
        <ChevronLeft size={18} />
      </button>

      {/* Pages */}
      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              flex
              h-11
              min-w-[44px]
              items-center
              justify-center
              rounded-full
              px-4
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          text-slate-500
          transition-all
          hover:border-blue-500
          hover:text-blue-600
          disabled:cursor-not-allowed
          disabled:opacity-40
          dark:border-slate-800
          dark:bg-slate-950
          dark:text-slate-400
        "
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default Pagination;
