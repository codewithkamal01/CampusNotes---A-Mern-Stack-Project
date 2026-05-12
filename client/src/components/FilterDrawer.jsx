import { useState } from "react";
import { SlidersHorizontal, X, ChevronDown, Check } from "lucide-react";

function FilterDrawer() {
  const [open, setOpen] = useState(false);

  const [selectedSemester, setSelectedSemester] = useState("Sem 1");

  const [selectedYear, setSelectedYear] = useState("2025");

  const semesters = [
    "Sem 1",
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 5",
    "Sem 6",
    "Sem 7",
    "Sem 8",
  ];

  const years = ["2026", "2025", "2024", "2023", "2022"];

  const subjects = [
    "Data Structures",
    "Algorithms",
    "Operating System",
    "DBMS",
    "Computer Networks",
  ];

  return (
    <>
      {/* Floating Filter Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-5
          right-5
          z-40
          flex
          items-center
          gap-2
          rounded-2xl
          bg-blue-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-blue-700
        "
      >
        <SlidersHorizontal size={18} />
        Filters
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/40
          backdrop-blur-sm
          transition-all
          duration-300
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-full
          max-w-[380px]
          flex-col
          overflow-hidden
          border-l
          border-slate-200
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          dark:border-slate-800
          dark:bg-slate-950
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            px-6
            py-5
            dark:border-slate-800
          "
        >
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Filters
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Refine your resources
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              rounded-xl
              p-2
              text-slate-500
              transition
              hover:bg-slate-100
              dark:hover:bg-slate-900
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-8">
            {/* Course */}
            <div>
              <label
                className="
                  mb-3
                  block
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                Course
              </label>

              <div className="relative">
                <select
                  className="
                    w-full
                    appearance-none
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:text-white
                  "
                >
                  <option>Computer Science</option>
                  <option>Electronics</option>
                  <option>Mechanical</option>
                  <option>Civil Engineering</option>
                </select>

                <ChevronDown
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />
              </div>
            </div>

            {/* Semester */}
            <div>
              <label
                className="
                  mb-3
                  block
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                Semester
              </label>

              <div className="grid grid-cols-2 gap-3">
                {semesters.map((semester) => (
                  <button
                    key={semester}
                    onClick={() => setSelectedSemester(semester)}
                    className={`
                      rounded-2xl
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        selectedSemester === semester
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
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
            <div>
              <label
                className="
                  mb-3
                  block
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                Year
              </label>

              <div className="flex flex-wrap gap-3">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        selectedYear === year
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                      }
                    `}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div>
              <label
                className="
                  mb-3
                  block
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                Subjects
              </label>

              <div className="space-y-2">
                {subjects.map((subject) => (
                  <label
                    key={subject}
                    className="
                      group
                      flex
                      cursor-pointer
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-transparent
                      px-4
                      py-3
                      transition-all
                      hover:border-slate-200
                      hover:bg-slate-50
                      dark:hover:border-slate-800
                      dark:hover:bg-slate-900
                    "
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="
                          h-4
                          w-4
                          rounded-md
                          border-slate-300
                          text-blue-600
                          focus:ring-blue-500
                        "
                      />

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {subject}
                      </span>
                    </div>

                    <Check
                      size={16}
                      className="
                        opacity-0
                        transition-opacity
                        group-hover:opacity-40
                      "
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            gap-3
            border-t
            border-slate-200
            bg-white
            p-5
            dark:border-slate-800
            dark:bg-slate-950
          "
        >
          <button
            className="
              flex-1
              rounded-2xl
              bg-slate-100
              py-3.5
              text-sm
              font-semibold
              text-slate-700
              transition-all
              hover:bg-slate-200
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
              flex-1
              rounded-2xl
              bg-blue-600
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-blue-700
            "
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </>
  );
}

export default FilterDrawer;
