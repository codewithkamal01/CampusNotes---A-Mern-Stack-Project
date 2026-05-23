import { Upload, LogOut, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import User from "../../assets/user-profile-icon.webp";

function ProfileHeader({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect
    navigate("/login");
  };

  return (
    <section
      className="
        relative overflow-hidden rounded-3xl
        border border-slate-200/80
        bg-white/90 backdrop-blur
        shadow-sm
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -top-20 -right-16
            h-52 w-52 rounded-full
            bg-blue-500/20 blur-3xl
          "
        />
        <div
          className="
            absolute bottom-0 left-0
            h-40 w-40 rounded-full
            bg-violet-500/20 blur-3xl
          "
        />
      </div>

      {/* Cover */}
      <div
        className="
          relative h-40
          bg-gradient-to-r
          from-blue-600
          via-indigo-500
          to-violet-500
        "
      >
        {/* Decorative */}
        <div className="absolute right-5 top-5 opacity-20">
          <Sparkles className="h-14 w-14 text-white" />
        </div>
      </div>

      <div className="relative px-5 pb-5 sm:px-7 sm:pb-7">
        <div
          className="
            flex flex-col gap-6
            lg:flex-row lg:items-end lg:justify-between
          "
        >
          {/* Left */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user?.avatar || User}
                alt={user?.name || "User"}
                onError={(e) => {
                  e.target.src = User;
                }}
                className="
  -mt-12 h-28 w-28
  rounded-3xl border-4 border-white
  object-cover shadow-xl
  ring-4 ring-blue-100
  transition-all duration-300
  hover:scale-105
  dark:border-slate-950
  dark:ring-slate-800
"
              />

              {/* Online Dot */}
              <span
                className="
                  absolute bottom-2 right-2
                  h-4 w-4 rounded-full
                  border-2 border-white
                  bg-emerald-500
                  dark:border-slate-950
                "
              />
            </div>

            {/* User Info */}
            <div className="sm:pb-3">
              <h1
                className="
                  text-2xl font-bold tracking-tight
                  text-slate-900
                  dark:text-white
                  sm:text-3xl
                "
              >
                {user?.name}
              </h1>

              <p
                className="
                  mt-1 text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Welcome back 👋
              </p>
            </div>
          </div>

          {/* Desktop Upload Button */}
          <div className="hidden sm:flex">
            <Link
              to="/upload"
              className="
      inline-flex items-center gap-2
      rounded-2xl
      bg-blue-600 px-5 py-3
      text-sm font-semibold text-white
      shadow-lg shadow-blue-500/20
      transition-all duration-200
      hover:scale-[1.02]
      hover:bg-blue-700
      active:scale-[0.98]
    "
            >
              <Upload size={18} />
              Upload Notes
            </Link>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="mt-5 flex gap-3 sm:hidden">
          <Link
            to="/upload"
            className="
    flex flex-1 items-center justify-center gap-2
    rounded-2xl bg-blue-600
    px-4 py-3
    text-sm font-semibold text-white
    shadow-md shadow-blue-500/20
    transition hover:bg-blue-700
  "
          >
            <Upload size={18} />
            Upload
          </Link>

          <button
            onClick={handleLogout}
            className="
              flex items-center justify-center gap-2
              rounded-2xl
              border border-red-200
              bg-red-50
              px-4 py-3
              text-sm font-semibold
              text-red-600
              transition
              hover:bg-red-100
              dark:border-red-900/40
              dark:bg-red-950/30
              dark:text-red-400
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
