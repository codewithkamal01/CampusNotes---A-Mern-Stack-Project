import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";

function DesktopAuth({ token, logout }) {
  return token ? (
    <div className="hidden items-center gap-3 md:flex">
      <Link
        to="/profile"
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-2.5
          text-sm
          font-semibold
          text-slate-700
          transition
          hover:bg-slate-50
          dark:border-slate-800
          dark:bg-slate-950
          dark:text-slate-300
        "
      >
        <User size={16} />
        Profile
      </Link>

      <button
        onClick={logout}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-red-200
          bg-red-50
          px-4
          py-2.5
          text-sm
          font-semibold
          text-red-600
          transition
          hover:bg-red-100
        "
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  ) : (
    <div className="hidden items-center gap-3 md:flex">
      <Link
        to="/login"
        className="
          rounded-xl
          px-4
          py-2.5
          text-sm
          font-semibold
          text-slate-700
          transition
          hover:bg-slate-100
          dark:text-slate-300
          dark:hover:bg-slate-800
        "
      >
        Login
      </Link>

      <Link
        to="/register"
        className="
          rounded-xl
          bg-blue-600
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-blue-700
        "
      >
        Sign up
      </Link>
    </div>
  );
}

export default DesktopAuth;
