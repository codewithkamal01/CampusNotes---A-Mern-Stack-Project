export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">About Us</h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            Our platform helps college students easily access, upload, and share
            notes, PYQs, and study materials in one place. We aim to make
            learning simpler, faster, and more organized for students.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Mission */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>

            <p className="leading-7 text-gray-600">
              We want to create a student-friendly platform where learners can
              easily find quality notes, previous year questions, and important
              resources for exam preparation.
            </p>
          </div>

          {/* What We Provide */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              What We Provide
            </h2>

            <p className="leading-7 text-gray-600">
              Students can upload notes, browse study materials, access PYQs,
              and manage resources in a clean and easy-to-use platform.
            </p>
          </div>

          {/* Why Choose */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Why Choose Us
            </h2>

            <p className="leading-7 text-gray-600">
              Our platform focuses on simplicity, fast access, organized
              content, and a modern user experience specially designed for
              college students.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-3xl bg-gray-100 p-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Built for Students
          </h2>

          <p className="mx-auto max-w-3xl leading-8 text-gray-600">
            From class notes to exam preparation materials, our goal is to help
            students save time and learn more efficiently through a centralized
            study platform.
          </p>
        </div>
      </div>
    </div>
  );
}
