import React from "react";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroIn from "../../assets/campus-notes-hero-image.webp";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-18 dark:bg-slate-950 md:px-8 lg:py-15">
      <div className="relative z-10 mx-auto flex max-w-7xl items-end justify-between gap-10">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white md:text-7xl">
            All Your College <span className="italic text-blue-600">Notes</span>{" "}
            in One Place
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
            Curated study materials for university students. Access thousands of
            high-quality notes, question papers, and interactive quizzes.
          </p>

          {/* Search Box */}
          <div className="flex max-w-2xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:flex-row">
            <div className="flex flex-1 items-center px-2">
              <Search size={20} className="mr-2 text-slate-400" />

              <input
                type="text"
                placeholder="Search by subject, code, or professor..."
                className="w-full bg-transparent text-base outline-none placeholder:text-slate-400 dark:text-white"
              />
            </div>

            <Link
              to="/notes"
              className="rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Learning
            </Link>
          </div>

          {/* Students Joined */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white dark:border-slate-900">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwwjgV5c8MV7Rv9KQNdSuRzk2m6Vyc6ZJeomrE3syP6Zy6TSeM5BR4qCR_quVCWQleJqMYLsbkCvN2POQXQQbkALo53JAV1R93zyyeQ1N7pjEPa6xJ-VHd_09IiLDU5FixNizh8Lwmelb_3J0lRmBKZ5H49qtMONROcCAl6dfbJNLQFiNaPNTgBKvXlpKSY7k2V6CGl5ZkbHGUJ8g8KjeEg48jRgD02uRfbHJoaA8xtqERObYRxTouVvq8qeCCJIXIavtJV2efIzMv"
                  alt="Student"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white dark:border-slate-900">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU_PTs-jKs7yedufB7I1o8FI4i4AHstjUl1J7_mncT_YnAU_ciFNo0aW5J9Dh7WyoMZ0Pj7pMemsHVyrsU7g-BIXItQd7bgJds0eljI3ikJPEBHmFLa0wQlpLmzhCkX89Fq7ttZIs80BskTwK13_KSsR0NtsYDrU19d27xHxq5PZ2GzgTlqjZtCUQ-ExJNVwIOxVOfSg8j2KGbGqckrA6jyaHE-QHKUFDOgOTrxCDsc14N_v76e2-3PxS2OzlqueTGFx9dcDM6Sx4P"
                  alt="Student"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-[10px] font-bold text-white dark:border-slate-900">
                +2k
              </div>
            </div>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Joined by 2,000+ students this week
            </span>
          </div>
        </div>

        <div className="relative hidden lg:flex w-[520px] shrink-0 items-end justify-center self-end">
          <img
            src={HeroIn}
            alt="College Student"
            className="max-h-[520px] w-full object-contain object-bottom select-none"
          />

          {/* Bottom Blend */}
          <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent dark:from-slate-950"></div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[100px]"></div>
    </section>
  );
}

export default HeroSection;
