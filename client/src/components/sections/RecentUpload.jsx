import { Link } from "react-router-dom";
import NoteCard from "../notes/NoteCard";
import { useEffect, useState } from "react";
import API from "../../services/api";
import Logo from "../../assets/campus-notes-thumbnail.webp";

function RecentUpload() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentNotes = async () => {
      try {
        const res = await API.get("/notes/latest");

        // Map API data to NoteCard props
        const mappedNotes = res.data.map((note) => ({
          id: note._id,
          image: Logo,
          title: note.title,
          subject: note.subject,
          semester: `Sem ${note.semester}`,
          author: note.uploadedBy?.name || "Unknown",
          fileUrl: note.fileUrl,
          badge: "Latest",
        }));

        setNotes(mappedNotes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentNotes();
  }, []);

  return (
    <section className="bg-white px-6 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Recently Uploaded
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Stay updated with the latest study materials.
            </p>
          </div>

          <Link
            to="/notes"
            className="font-semibold text-blue-600 hover:underline"
          >
            View All
          </Link>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="
                  h-[320px]
                  animate-pulse
                  rounded-3xl
                  bg-slate-200
                  dark:bg-slate-800
                "
              />
            ))}
          </div>
        ) : (
          /* Notes Grid */
          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {notes.map((note) => (
              <NoteCard key={note.id} {...note} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentUpload;
