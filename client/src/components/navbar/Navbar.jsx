import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import NavLinks from "./NavLinks";
import DesktopAuth from "./DesktopAuth";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ThemeToggle";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");

    window.location.reload();
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-slate-200/60
        bg-white/80
        backdrop-blur-xl
        dark:border-slate-800/60
        dark:bg-slate-900/90
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              rounded-xl
              p-2
              transition
              hover:bg-slate-100
              dark:hover:bg-slate-800
              md:hidden
            "
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <NavLink
            to="/"
            className="
              text-2xl
              font-black
              tracking-tight
              text-blue-600
            "
          >
            CampusNotes
          </NavLink>

          {/* Desktop Nav */}
          <div
            className="
              ml-6
              hidden
              items-center
              gap-7
              md:flex
            "
          >
            <NavLinks />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <DesktopAuth token={token} logout={logout} />
          {token && (
            <Link
              to="/profile"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                md:hidden
              "
            >
              <User size={18} />
            </Link>
          )}

          {!token && (
            <Link
              to="/register"
              className="
                rounded-xl
                bg-blue-600
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                md:hidden
              "
            >
              Join
            </Link>
          )}
        </div>
      </div>
      {/* Mobile */}
      <MobileMenu
        menuOpen={menuOpen}
        token={token}
        logout={logout}
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
}

export default NavBar;
