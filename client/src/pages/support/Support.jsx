import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 dark:bg-slate-950 md:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Support Center
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-slate-400">
            Find help, answers, and support resources for using the platform.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Help Articles
            </h2>

            <p className="mb-6 leading-7 text-gray-600 dark:text-slate-400">
              Browse guides, tutorials, and commonly asked questions.
            </p>

            <button className="rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black">
              View Articles
            </button>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Contact Support
            </h2>

            <p className="mb-6 leading-7 text-gray-600 dark:text-slate-400">
              Reach out for technical help or account-related assistance.
            </p>

            <Link
              to="/contact"
              className="inline-block rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Contact Us
            </Link>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              System Status
            </h2>

            <p className="mb-6 leading-7 text-gray-600 dark:text-slate-400">
              Check maintenance updates and platform availability.
            </p>

            <Link
              to="/status"
              className="inline-block rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              View Status
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 rounded-3xl border border-gray-200 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                How do I create an account?
              </h3>

              <p className="leading-7 text-gray-600 dark:text-slate-400">
                Register using the signup page with your email and password.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                How can I reset my password?
              </h3>

              <p className="leading-7 text-gray-600 dark:text-slate-400">
                Use the “Forgot Password” option on the login page.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                How do I contact support?
              </h3>

              <p className="leading-7 text-gray-600 dark:text-slate-400">
                Contact support through the Contact page.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl bg-gray-100 p-10 text-center dark:bg-slate-900">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Still Need Help?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-gray-600 dark:text-slate-400">
            Our support team is available to assist you.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
          >
            Get Support
          </Link>
        </div>
      </div>
    </div>
  );
}