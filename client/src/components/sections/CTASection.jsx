import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="px-6 py-16 md:px-8">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[2.5rem]
          bg-gradient-to-br
          from-blue-600
          via-blue-700
          to-indigo-700
          px-6
          py-16
          text-white
          shadow-2xl
          md:px-12
          md:py-20
        "
      >
        {/* Decorative Blur */}
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Ready to boost your academic performance?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Join thousands of students already using CampusNotes to study
            smarter, organize better, and learn faster.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="
                rounded-2xl
                bg-white
                px-8
                py-4
                text-lg
                font-semibold
                text-blue-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Create Free Account
            </Link>

            <Link
              to="/notes"
              className="
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              Browse Library
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
