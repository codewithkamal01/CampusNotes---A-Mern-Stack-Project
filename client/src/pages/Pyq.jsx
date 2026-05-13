import { useEffect, useMemo, useState } from "react";
import { FileQuestion } from "lucide-react";

import API from "../services/api";

import FilterDrawer from "../components/FilterDrawer";
import PYQHeader from "../components/pyq/PYQHeader";
import PYQGrid from "../components/pyq/PYQGrid";
import LoadMoreSection from "../components/pyq/LoadMoreSection";

function Pyq() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSemester, setSelectedSemester] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchSubject, setSearchSubject] = useState("");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Fetch
  useEffect(() => {
    const fetchPYQ = async () => {
      try {
        const res = await API.get("/notes?type=pyq");

        setPapers(res.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPYQ();
  }, []);

  // Filter Logic
  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      // Semester
      const matchesSemester =
        selectedSemester === "All" ||
        String(paper.semester) === selectedSemester.replace("Sem ", "");

      // Year
      const matchesYear =
        selectedYear === "All" || String(paper.year) === selectedYear;

      // Subject Search
      const matchesSubject = paper.subject
        ?.toLowerCase()
        .includes(searchSubject.toLowerCase());

      return matchesSemester && matchesYear && matchesSubject;
    });
  }, [papers, selectedSemester, selectedYear, searchSubject]);

  // Format Data
  const formattedPapers = filteredPapers.map((paper) => ({
    _id: paper._id,
    title: paper.title,
    subject: paper.subject,
    course: paper.course,
    semester: paper.semester,
    year: paper.year,
    fileUrl: paper.fileUrl,
  }));

  // Visible Papers
  const visiblePapers = formattedPapers.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Filter */}
      <FilterDrawer
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        searchSubject={searchSubject}
        setSearchSubject={setSearchSubject}
      />

      {/* Main */}
      <main className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div
            className="
              mb-10
              border-b border-slate-200
              bg-slate-50/80
              py-5 backdrop-blur-xl
              dark:border-slate-800
              dark:bg-slate-900/80
            "
          >
            <PYQHeader />
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
              {/* Loader */}
              <div className="relative mb-6">
                <div
                  className="
                    h-16 w-16 rounded-full
                    border-4 border-slate-200
                    dark:border-slate-700
                  "
                />

                <div
                  className="
                    absolute left-0 top-0
                    h-16 w-16 animate-spin
                    rounded-full border-4
                    border-transparent
                    border-t-blue-600
                    border-r-violet-600
                  "
                />
              </div>

              <h2
                className="
                  text-xl font-semibold
                  text-slate-800
                  dark:text-white
                "
              >
                Loading Previous Year Questions
              </h2>
            </div>
          ) : formattedPapers.length === 0 ? (
            /* Empty */
            <div
              className="
                flex min-h-[350px]
                flex-col items-center
                justify-center rounded-3xl
                border border-dashed
                border-slate-300
                bg-white px-6
                text-center shadow-sm
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <div
                className="
                  mb-5 rounded-full
                  bg-slate-100 p-5
                  dark:bg-slate-800
                "
              >
                <FileQuestion
                  className="
                    h-10 w-10
                    text-slate-400
                  "
                  strokeWidth={1.8}
                />
              </div>

              <h2
                className="
                  text-2xl font-bold
                  text-slate-800
                  dark:text-white
                "
              >
                No PYQs Found
              </h2>

              <p
                className="
                  mt-3 max-w-md
                  text-sm leading-relaxed
                  text-slate-500
                  dark:text-slate-400
                "
              >
                No papers found for the selected filters.
              </p>
            </div>
          ) : (
            <>
              {/* Grid */}
              <PYQGrid papers={visiblePapers} />

              {/* Load More */}
              <LoadMoreSection
                visibleCount={visiblePapers.length}
                totalCount={formattedPapers.length}
                onLoadMore={handleLoadMore}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Pyq;
