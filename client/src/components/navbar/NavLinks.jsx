import { NavLink } from "react-router-dom";

function NavLinks({ mobile = false, onClick }) {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Notes",
      path: "/notes",
    },

    {
      name: "PYQ",
      path: "/pyq",
    },

    {
      name: "Upload",
      path: "/upload",
    },
    {
      name: "Play Quiz",
      path: "/quiz",
    },
      {
      name: "AI Study Buddy",
      path: "/campus-ai",
    },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={onClick}
          className={({ isActive }) =>
            mobile
              ? `block rounded-2xl px-4 py-3 text-sm
        font-semibold
        transition
        ${
          isActive
            ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        }
      `
              : `
        pb-1
        text-sm
        font-semibold
        transition-colors
        duration-200
        ${
          isActive
            ? "border-b-2 border-blue-600 text-blue-600"
            : "text-slate-600 hover:text-blue-600 dark:text-slate-400"
        }
      `
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
}

export default NavLinks;
