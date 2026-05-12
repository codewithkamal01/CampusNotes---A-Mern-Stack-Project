import NoteCard from "./NoteCard";

function NotesGrid({ notes }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {notes.map((note, index) => (
        <NoteCard key={index} {...note} />
      ))}
    </div>
  );
}

export default NotesGrid;
