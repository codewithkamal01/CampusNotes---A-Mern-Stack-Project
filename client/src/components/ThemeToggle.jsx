import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-slate-200
        bg-white shadow-sm
        transition-all duration-300
        hover:scale-105 hover:shadow-md
        dark:border-slate-700 dark:bg-slate-900
        hover:bg-slate-100 dark:hover:bg-slate-800
      "
    >
      {darkMode ? (
        <Sun
          className="
            h-5 w-5 text-yellow-400
            transition-all duration-300
            rotate-0 scale-100
          "
        />
      ) : (
        <Moon
          className="
            h-5 w-5 text-slate-700
            transition-all duration-300
            rotate-0 scale-100
            dark:text-slate-200
          "
        />
      )}
    </button>
  );
}

export default ThemeToggle;
