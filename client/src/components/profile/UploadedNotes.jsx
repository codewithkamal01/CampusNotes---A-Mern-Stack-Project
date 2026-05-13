import ProfileNoteCard from "./ProfileNoteCard";

function UploadedNotes({ notes, onDelete, deletingId }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <ProfileNoteCard key={note._id} note={note} deletingId={deletingId} onDelete={onDelete}/>
      ))}
    </div>
  );
}

export default UploadedNotes;
