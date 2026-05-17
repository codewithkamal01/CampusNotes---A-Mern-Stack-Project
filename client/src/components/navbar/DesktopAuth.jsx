import { Link } from "react-router-dom";
import { User, LogOut, ArrowRight } from "lucide-react";

function DesktopAuth({ token, logout }) {
  return token ? (
    <div className="hidden items-center gap-3 md:flex">
      {/* Profile */}
      <Link
        to="/profile"
        className="
          group flex items-center gap-2 rounded-2xl
          border border-slate-200 bg-white
          px-4 py-2.5
          text-sm font-semibold text-slate-700
          shadow-sm transition-all duration-300
          hover:-translate-y-0.5 hover:border-blue-200
          hover:bg-blue-50 hover:text-blue-600
          hover:shadow-md
          dark:border-slate-800
          dark:bg-slate-950
          dark:text-slate-300
          dark:hover:border-slate-700
          dark:hover:bg-slate-900
          dark:hover:text-blue-400
        "
      >
        <User
          size={16}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        Profile
      </Link>

      {/* Logout */}
      <button
        onClick={logout}
        className="
          group flex items-center gap-2 rounded-2xl
          border border-red-200 bg-red-50
          px-4 py-2.5
          text-sm font-semibold text-red-600
          shadow-sm transition-all duration-300
          hover:-translate-y-0.5 hover:bg-red-100
          hover:shadow-md
          dark:border-red-900/40
          dark:bg-red-950/40
          dark:text-red-400
          dark:hover:bg-red-900/40
        "
      >
        <LogOut
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        Logout
      </button>
    </div>
  ) : (
    <div className="hidden items-center gap-3 md:flex">
      {/* Login */}
      <Link
        to="/login"
        className="
          rounded-2xl px-5 py-2.5
          text-sm font-semibold text-slate-700
          transition-all duration-300
          hover:bg-slate-100 hover:text-slate-900
          dark:text-slate-300
          dark:hover:bg-slate-800
          dark:hover:text-white
        "
      >
        Login
      </Link>

      {/* Sign Up */}
      <Link
        to="/register"
        className="
          group flex items-center gap-2 rounded-2xl
          bg-gradient-to-r from-blue-600 to-blue-700
          px-5 py-2.5
          text-sm font-semibold text-white
          shadow-md transition-all duration-300
          hover:-translate-y-0.5
          hover:from-blue-700 hover:to-blue-800
          hover:shadow-xl
          active:scale-[0.98]
        "
      >
        Sign up
        <ArrowRight
          size={16}
          className="
            transition-transform duration-300
            group-hover:translate-x-0.5
          "
        />
      </Link>
    </div>
  );
}

export default DesktopAuth;
