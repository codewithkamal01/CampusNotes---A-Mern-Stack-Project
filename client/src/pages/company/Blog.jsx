export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "How to Prepare for Semester Exams Effectively",
      description:
        "Simple study techniques, revision tips, and preparation strategies for college students.",
      category: "Study Tips",
      date: "May 14, 2026",
    },
    {
      id: 2,
      title: "Best Resources for BCA Students",
      description:
        "Explore useful websites, notes, YouTube channels, and tools helpful for BCA students.",
      category: "Education",
      date: "May 10, 2026",
    },
    {
      id: 3,
      title: "Importance of Previous Year Questions",
      description:
        "Learn how PYQs can help improve exam preparation and understanding of question patterns.",
      category: "Exam Preparation",
      date: "May 5, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Student Blog
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore study tips, educational resources, exam preparation guides,
            and helpful articles for students.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-3xl border border-gray-300 px-6 py-4 outline-none focus:border-black"
          />
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Category */}
              <span className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
                {blog.category}
              </span>

              {/* Title */}
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="mb-6 leading-7 text-gray-600">{blog.description}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{blog.date}</span>

                <button className="rounded-2xl bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-3xl bg-gray-100 p-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Stay Updated
          </h2>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-gray-600">
            Subscribe to receive updates about new notes, PYQs, study materials,
            and educational articles.
          </p>

          <div className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-2xl border border-gray-300 px-5 py-3 outline-none focus:border-black"
            />

            <button className="rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
