import { Plus, Upload } from "lucide-react";
import { Link } from "react-router-dom";

function FloatingUploadButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse Ring */}
      <div
        className="
          absolute inset-0
          animate-ping
          rounded-full
          bg-blue-500/30
        "
      />

      {/* Glow */}
      <div
        className="
          absolute inset-0
          rounded-full
          bg-blue-500/20
          blur-2xl
        "
      />

      {/* Button */}
      <Link
        to="/upload"
        className="
          group relative
          flex items-center gap-3
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-violet-600
          px-4 py-3
          text-white
          shadow-2xl
          shadow-blue-500/30
          transition-all duration-300
          hover:scale-105
          active:scale-95
        "
      >
        {/* Floating Shine */}
        <span
          className="
            absolute inset-0
            -translate-x-full
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
            relative flex h-9 w-9
            items-center justify-center
            rounded-full
            bg-white/15
            backdrop-blur
          "
        >
          <Upload size={20} className="animate-bounce" />
        </div>

        {/* Text */}
        <div className="relative hidden sm:block">
          <p className="text-sm font-bold">Upload Notes</p>

          <p className="text-xs text-blue-100">Share with students</p>
        </div>

        {/* Mobile Plus */}
        <Plus size={18} className="relative sm:hidden" />
      </Link>
    </div>
  );
}

export default FloatingUploadButton;
