import ProfileNoteCard from "./ProfileNoteCard";

function UploadedNotes({ notes }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {notes.map((note,i) => (
        <ProfileNoteCard key={i} note={note} />
      ))}
    </div>
  );
}

export default UploadedNotes;
