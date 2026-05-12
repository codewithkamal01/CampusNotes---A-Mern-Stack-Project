import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import API from "../services/api";
import FilterDrawer from "../components/FilterDrawer";
import NotesHeader from "../components/notes/NotesHeader";
import NotesSearchBar from "../components/notes/NotesSearchBar";
import NotesGrid from "../components/notes/NotesGrid";
import Pagination from "../components/notes/Pagination";
import Logo from "../assets/logo.jpg";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const notesPerPage = 4;

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await API.get("/notes?type=notes");

        setNotes(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Search Filter
  const filteredNotes = notes.filter((note) =>
    note.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Transform API Data For Cards
  const formattedNotes = filteredNotes.map((note) => ({
    _id: note._id,
    title: note.title,
    category: note.subject,
    semester: `Semester ${note.semester}`,
    author: note.uploadedBy?.name || "Unknown",
    badge: "Verified",
    image: Logo,
    fileUrl: note.fileUrl,
  }));

  // pagination logic
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = formattedNotes.slice(indexOfFirstNote, indexOfLastNote);
  const totalPages = Math.ceil(formattedNotes.length / notesPerPage);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Filter Drawer */}
      <FilterDrawer />

      {/* Main Content */}
      <main className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              mb-10
              space-y-6
              border-b
              border-slate-200
              bg-slate-50/80
              py-5
              backdrop-blur-xl
              dark:border-slate-800
              dark:bg-slate-900/80
            "
          >
            {/* Header */}
            <NotesHeader />

            {/* Search */}
            <NotesSearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
              {/* Loader */}
              <div className="relative mb-6">
                <div className="h-16 w-16 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>

                <div className="absolute left-0 top-0 h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-blue-600 border-r-violet-600"></div>
              </div>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                Loading Notes
              </h2>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Fetching study materials for you...
              </p>
            </div>
          ) : formattedNotes.length > 0 ? (
            <>
              {/* Notes Grid */}
              <NotesGrid notes={currentNotes} />

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            /* Empty State */
            <div
              className=" flex min-h-[320px] flex-col items-center justify-center rounded-3xl border
                border-dashed
                border-slate-300
                bg-white
                px-6
                text-center
                shadow-sm
                dark:border-slate-700
                dark:bg-slate-950
              "
            >
              <div className="mb-5 rounded-full bg-slate-100 p-5 dark:bg-slate-800">
                <FileText
                  className="h-10 w-10 text-slate-400"
                  strokeWidth={1.8}
                />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                No Notes Found
              </h2>

              <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
                Try changing your search or filters to find available notes.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Notes;
