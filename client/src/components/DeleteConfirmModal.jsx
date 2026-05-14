import { Trash2 } from "lucide-react";

function DeleteConfirmModal({ isOpen, onClose, onConfirm, loading }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full max-w-md
          rounded-3xl
          border border-slate-200
          bg-white
          p-6 shadow-2xl
          dark:border-slate-800
          dark:bg-slate-950
        "
      >
        {/* Icon */}
        <div
          className="
            mx-auto flex h-16 w-16
            items-center justify-center
            rounded-full
            bg-red-100
            dark:bg-red-950/40
          "
        >
          <Trash2 className="text-red-500" size={30} />
        </div>

        {/* Content */}
        <div className="mt-5 text-center">
          <h2
            className="
              text-2xl font-bold
              text-slate-900
              dark:text-white
            "
          >
            Delete Note?
          </h2>

          <p
            className="
              mt-2 text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            This action cannot be undone.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="
              flex-1 rounded-2xl
              border border-slate-300
              px-4 py-3
              font-medium
              transition hover:bg-slate-100

              dark:border-slate-700
              dark:hover:bg-slate-900
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              flex-1 rounded-2xl
              bg-red-500
              px-4 py-3
              font-semibold text-white
              transition hover:bg-red-600
              disabled:opacity-60
            "
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
