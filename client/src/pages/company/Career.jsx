export default function Career() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 dark:bg-slate-950 md:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Careers
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-slate-400">
            Help us build a better learning platform for students.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 rounded-3xl bg-gray-100 p-10 dark:bg-slate-900">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
            Why Join Us?
          </h2>

          <p className="leading-8 text-gray-600 dark:text-slate-400">
            We are building a student-focused platform where learning resources
            become more accessible, organized, and helpful.
          </p>
        </div>

        {/* Roles */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Frontend */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Frontend Developer
              </h3>

              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 dark:bg-slate-800 dark:text-slate-300">
                Remote
              </span>
            </div>

            <p className="mb-6 leading-7 text-gray-600 dark:text-slate-400">
              Looking for developers with knowledge of React and responsive UI
              design.
            </p>

            <button className="rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black">
              Apply Now
            </button>
          </div>

          {/* Contributor */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Notes Contributor
              </h3>

              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 dark:bg-slate-800 dark:text-slate-300">
                Part Time
              </span>
            </div>

            <p className="mb-6 leading-7 text-gray-600 dark:text-slate-400">
              Help students by contributing quality notes and study materials.
            </p>

            <button className="rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black">
              Contribute
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 rounded-3xl border border-dashed border-gray-300 p-10 text-center dark:border-slate-700">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            Want to Collaborate?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-gray-600 dark:text-slate-400">
            Connect with us if you are passionate about education and helping
            students learn better.
          </p>

          <button className="rounded-2xl border border-black px-6 py-3 font-medium text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
