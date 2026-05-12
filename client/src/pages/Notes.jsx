import React, { useEffect, useState } from "react";
import API from "../services/api";
import FilterDrawer from "../components/FilterDrawer";
import NotesHeader from "../components/notes/NotesHeader";
import NotesSearchBar from "../components/notes/NotesSearchBar";
import NotesGrid from "../components/notes/NotesGrid";
import Pagination from "../components/notes/Pagination";
import Logo from "../assets/logo.jpg";

function Notes() {
  const [notes, setNotes] = useState([]);
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
    fileUrl: `http://localhost:5000${note.fileUrl}`,
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

          {/* Notes Grid */}
          {formattedNotes.length > 0 ? (
            <NotesGrid notes={currentNotes} />
          ) : (
            <div
              className="
                flex
                min-h-[300px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-dashed
                border-slate-300
                bg-white
                text-center
                dark:border-slate-700
                dark:bg-slate-950
              "
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                No Notes Found
              </h2>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Try changing your search or filters.
              </p>
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
}

export default Notes;
