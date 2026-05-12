import {
  Globe,
  AtSign,
  BookOpen,
  FileText,
  Upload,
  GraduationCap,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      
      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="mb-5 inline-block text-3xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            CampusNotes.
          </Link>

          <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            A modern academic platform helping students access notes,
            previous year questions, quizzes, and collaborative study
            resources in one place.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            
            <a
              href="#"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-slate-100
                text-slate-600
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-600
                hover:text-white
                dark:bg-slate-900
                dark:text-slate-400
              "
            >
              <Globe size={18} />
            </a>

            <a
              href="#"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-slate-100
                text-slate-600
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-600
                hover:text-white
                dark:bg-slate-900
                dark:text-slate-400
              "
            >
              <AtSign size={18} />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-slate-900 dark:text-white">
            Platform
          </h3>

          <div className="flex flex-col gap-4 text-sm">
            
            <Link
              to="/notes"
              className="flex items-center gap-3 text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              <BookOpen size={16} />
              Notes Library
            </Link>

            <Link
              to="/pyq"
              className="flex items-center gap-3 text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              <FileText size={16} />
              Previous Year Questions
            </Link>

            <Link
              to="/register"
              className="flex items-center gap-3 text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              <Upload size={16} />
              Upload Notes
            </Link>

            <Link
              to="/quiz"
              className="flex items-center gap-3 text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              <GraduationCap size={16} />
              Viva Quiz
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-slate-900 dark:text-white">
            Company
          </h3>

          <div className="flex flex-col gap-4 text-sm">
            
            <Link
              to="/about"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              Contact
            </Link>

            <Link
              to="/careers"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              Careers
            </Link>

            <Link
              to="/blog"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-slate-900 dark:text-white">
            Legal
          </h3>

          <div className="flex flex-col gap-4 text-sm">
            
            <Link
              to="/privacy"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/cookies"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              Cookie Policy
            </Link>

            <Link
              to="/security"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
            >
              Security
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            py-6
            text-sm
            text-slate-500
            dark:text-slate-400
            md:flex-row
          "
        >
          <p>
            © 2026 CampusNotes. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            
            <Link
              to="/sitemap"
              className="transition hover:text-blue-600"
            >
              Sitemap
            </Link>

            <Link
              to="/support"
              className="transition hover:text-blue-600"
            >
              Support
            </Link>

            <Link
              to="/status"
              className="transition hover:text-blue-600"
            >
              System Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;