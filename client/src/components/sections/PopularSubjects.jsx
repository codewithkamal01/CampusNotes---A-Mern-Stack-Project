import { Link } from "react-router-dom";

function PopularSubjects() {
  const subjects = [
    "Computer Science",
    "Mathematics",
    "Engineering",
    "Literature",
    "Mern Stack",
    "Data Science",
    "Business",
  ];

  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Explore Popular Subjects
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Discover curated notes, PYQs, quizzes, and study resources from the
            most searched academic subjects.
          </p>
        </div>

        {/* Subjects */}
        <div className="flex flex-wrap justify-center gap-4">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={"/"}
              className="
                group
                rounded-full
                border
                border-slate-200
                bg-slate-100
                px-6
                py-3
                text-sm
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-600
                hover:bg-blue-600
                hover:text-white
                hover:shadow-lg
                dark:border-slate-800
                dark:bg-slate-900
                dark:text-slate-300
                dark:hover:border-blue-500
              "
            >
              <span className="transition-all duration-300">{subject}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularSubjects;
