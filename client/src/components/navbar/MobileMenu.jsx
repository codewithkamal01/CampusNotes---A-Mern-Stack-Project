import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";

function MobileMenu({ menuOpen, token, logout, setMenuOpen }) {
  return (
    <div
      className={`
        overflow-hidden
        border-t
        border-slate-200
        bg-white
        transition-all
        duration-300
        dark:border-slate-800
        dark:bg-slate-950
        md:hidden
        ${menuOpen ? "max-h-[500px] py-5" : "max-h-0"}
      `}
    >
      <div className="space-y-1 px-4">
        <NavLinks mobile onClick={() => setMenuOpen(false)} />

        <div
          className="
            mt-4
            space-y-3
            border-t
            border-slate-200
            pt-4
            dark:border-slate-800
          "
        >
          {token ? (
            <button
              onClick={logout}
              className="
                w-full
                rounded-2xl
                bg-red-50
                px-4
                py-3
                text-sm
                font-semibold
                text-red-600
              "
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  rounded-2xl
                  border
                  border-slate-200
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  rounded-2xl
                  bg-blue-600
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Create Account
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
