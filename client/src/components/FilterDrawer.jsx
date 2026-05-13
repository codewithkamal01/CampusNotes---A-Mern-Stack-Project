import { useState } from "react";
import { SlidersHorizontal, Check } from "lucide-react";

function FilterDrawer({
  selectedSemester,
  setSelectedSemester,
  selectedYear,
  setSelectedYear,
  searchSubject,
  setSearchSubject,
}) {
  const [open, setOpen] = useState(false);

  const semesters = [
    "All",
    "Sem 1",
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 5",
    "Sem 6",
    "Sem 7",
    "Sem 8",
  ];

  const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020"];

  return (
    <>
      {/* Floating Minimal Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
    fixed bottom-5 right-5 z-50
    flex items-center gap-2
    rounded-full
    border border-blue-200/50
    bg-gradient-to-r
    from-blue-600
    to-indigo-600
    px-5 py-3
    text-sm font-semibold
    text-white
    shadow-2xl shadow-blue-500/25
    backdrop-blur
    transition-all duration-300
    hover:scale-105
    hover:shadow-blue-500/40
    active:scale-95
    dark:border-blue-900/40
  "
      >
        <SlidersHorizontal size={17} />
        Filters
      </button>

      {/* Floating Card */}
      <div
        className={`
          fixed bottom-24 right-5 z-50
          w-[320px]
          rounded-3xl
          border border-slate-200
          bg-white/95
          p-4 shadow-2xl
          backdrop-blur-xl
          transition-all duration-300
          dark:border-slate-800
          dark:bg-slate-950/95
          ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }
        `}
      >

        {/* Header */}
        <div className="mb-5">
          <h2
            className="
              text-lg font-bold
              text-slate-900
              dark:text-white
            "
          >
            Filter PYQs
          </h2>

          <p
            className="
              mt-1 text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Find papers faster
          </p>
        </div>
        {/* Search */}
        <div className="mb-4">
          <p
            className="
      mb-3 text-xs font-bold
      uppercase tracking-wider
      text-slate-400
    "
          >
            Search Subject
          </p>

          <input
            type="text"
            placeholder="Search PYQ subject..."
            value={searchSubject}
            onChange={(e) => setSearchSubject(e.target.value)}
            className="
      w-full rounded-2xl
      border border-blue-100
      bg-blue-50/60
      px-4 py-3
      text-sm text-slate-700
      outline-none
      transition-all duration-200
      placeholder:text-slate-400
      focus:border-blue-500
      focus:bg-white
      focus:ring-4
      focus:ring-blue-100
      dark:border-slate-800
      dark:bg-slate-900
      dark:text-white
      dark:focus:ring-blue-950/40
    "
          />
        </div>
        {/* Semester */}
        <div>
          <p
            className="
              mb-3 text-xs font-bold
              uppercase tracking-wider
              text-slate-400
            "
          >
            Semester
          </p>

          <div className="grid grid-cols-3 gap-2">
            {semesters.map((semester) => (
              <button
                key={semester}
                onClick={() => setSelectedSemester(semester)}
                className={`
                  rounded-2xl
                  px-3 py-2
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    selectedSemester === semester
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }
                `}
              >
                {semester}
              </button>
            ))}
          </div>
        </div>

        {/* Year */}
        <div className="mt-4">
          <p
            className="
              mb-3 text-xs font-bold
              uppercase tracking-wider
              text-slate-400
            "
          >
            Year
          </p>

          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`
                  flex items-center gap-1.5
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    selectedYear === year
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }
                `}
              >
                {selectedYear === year && <Check size={14} />}

                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => {
              setSelectedSemester("All");
              setSelectedYear("All");
            }}
            className="
              flex-1 rounded-2xl
              bg-slate-100
              py-2.5 text-sm
              font-semibold text-slate-700
              transition hover:bg-slate-200
              dark:bg-slate-900
              dark:text-slate-300
              dark:hover:bg-slate-800
            "
          >
            Reset
          </button>

          <button
            onClick={() => setOpen(false)}
            className="
              flex-1 rounded-2xl
              bg-blue-600
              py-2.5 text-sm
              font-semibold text-white
              transition hover:bg-blue-700
            "
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterDrawer;
