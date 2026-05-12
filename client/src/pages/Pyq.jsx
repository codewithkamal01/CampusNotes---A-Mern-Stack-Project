import { useEffect, useState } from "react";
import API from "../services/api";
import FilterDrawer from "../components/FilterDrawer";
import PYQHeader from "../components/pyq/PYQHeader";
import PYQGrid from "../components/pyq/PYQGrid";
import LoadMoreSection from "../components/pyq/LoadMoreSection";

function Pyq() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPYQ = async () => {
      try {
        const res = await API.get("/notes?type=pyq");

        setPapers(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPYQ();
  }, []);

  const formattedPapers = papers.map((paper) => ({
    _id: paper._id,
    title: paper.title,
    subject: paper.subject,
    course: paper.course,
    semester: paper.semester,
    year: paper.year,
    fileUrl: `http://localhost:5000${paper.fileUrl}`,
  }));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Filter Drawer */}
      <FilterDrawer />

      {/* Main */}
      <main className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div
            className="
              mb-10
              flex
              flex-col
              gap-6
              border-b
              border-slate-200
              bg-slate-50/80
              py-5
              backdrop-blur-xl
              dark:border-slate-800
              dark:bg-slate-900/80
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <PYQHeader />
          </div>

          {/* Loading */}
          {loading ? (
            <div className="py-20 text-center">
              <p className="text-slate-500">Loading PYQs...</p>
            </div>
          ) : (
            <>
              {/* Grid */}
              <PYQGrid papers={formattedPapers} />

              {/* Load More */}
              <LoadMoreSection />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Pyq;
