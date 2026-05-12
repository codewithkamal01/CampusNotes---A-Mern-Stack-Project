import { Info, Loader2 } from "lucide-react";

function UploadActions({ loading }) {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        border-t
        border-slate-200
        pt-6
        dark:border-slate-800
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Info size={16} />

        <span>Your upload will be reviewed before publishing.</span>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="
            rounded-2xl
            bg-slate-100
            px-6
            py-3
            text-sm
            font-semibold
            text-slate-700
            transition
            hover:bg-slate-200
            dark:bg-slate-900
            dark:text-slate-300
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-blue-600
            px-8
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Uploading...
            </>
          ) : (
            "Submit Content"
          )}
        </button>
      </div>
    </div>
  );
}

export default UploadActions;
