export default function Career() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Careers</h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Help us build a better learning platform for students.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 rounded-3xl bg-gray-100 p-10">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Why Join Us?
          </h2>

          <p className="leading-8 text-gray-600">
            We are building a student-focused platform where learning resources
            become more accessible, organized, and helpful. Our goal is to
            improve the study experience for college students through technology
            and collaboration.
          </p>
        </div>

        {/* Roles */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Frontend */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900">
                Frontend Developer
              </h3>

              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
                Remote
              </span>
            </div>

            <p className="mb-6 leading-7 text-gray-600">
              Looking for developers with knowledge of React, responsive UI
              design, and API integration to help improve the student
              experience.
            </p>

            <button className="rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90">
              Apply Now
            </button>
          </div>

          {/* Contributor */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900">
                Notes Contributor
              </h3>

              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
                Part Time
              </span>
            </div>

            <p className="mb-6 leading-7 text-gray-600">
              Help students by contributing quality notes, study materials, and
              previous year questions for different subjects and semesters.
            </p>

            <button className="rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90">
              Contribute
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 rounded-3xl border border-dashed border-gray-300 p-10 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Want to Collaborate?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-gray-600">
            Even if there are no open roles right now, you can still connect
            with us if you are passionate about education, development, or
            helping students learn better.
          </p>

          <button className="rounded-2xl border border-black px-6 py-3 font-medium text-black transition hover:bg-black hover:text-white">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
