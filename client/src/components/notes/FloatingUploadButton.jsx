import { Upload } from "lucide-react";
import { Link } from "react-router-dom";

function FloatingUploadButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Pulse Ring */}
      <div className="absolute inset-0" />

      {/* Button */}
      <Link
        to="/upload"
        className="
          group relative flex items-center gap-3
          rounded-full
          bg-gradient-to-r from-blue-600 to-violet-600
          px-4 py-3
          text-white
          shadow-xl shadow-blue-500/30
          transition-all duration-300
          hover:scale-105
          active:scale-95
        "
      >
        {/* Shine */}
        <span
          className="
            absolute inset-0
            -translate-x-full
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform duration-1000
            group-hover:translate-x-full
          "
        />

        {/* Icon */}
        <div
          className="
            relative flex h-10 w-10
            items-center justify-center
            rounded-full
            bg-white/15
          "
        >
          <Upload size={20} />
        </div>

        {/* Text */}
        <div className="relative hidden sm:block">
          <p className="text-sm font-semibold">Upload Notes</p>

          <p className="text-xs text-blue-100">Share with students</p>
        </div>
      </Link>
    </div>
  );
}

export default FloatingUploadButton;
