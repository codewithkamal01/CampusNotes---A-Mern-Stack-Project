import { Search } from "lucide-react";

function NotesSearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={20}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by title, subject or professor..."
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          pl-14
          pr-5
          text-sm
          outline-none
          transition-all
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          dark:border-slate-800
          dark:bg-slate-950
          dark:text-white
        "
      />
    </div>
  );
}

export default NotesSearchBar;
