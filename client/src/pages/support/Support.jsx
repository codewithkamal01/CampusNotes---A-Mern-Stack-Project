import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Support Center
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find help, answers, and support resources for using the platform.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Help Articles
            </h2>

            <p className="mb-6 leading-7 text-gray-600">
              Browse guides, tutorials, and commonly asked questions to quickly
              solve issues.
            </p>

            <button className="rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90">
              View Articles
            </button>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Contact Support
            </h2>

            <p className="mb-6 leading-7 text-gray-600">
              Reach out to our support team for technical help, account issues,
              or general assistance.
            </p>

            <Link
              to="/contact"
              className="inline-block rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              System Status
            </h2>

            <p className="mb-6 leading-7 text-gray-600">
              Check the latest server status, maintenance updates, and platform
              availability.
            </p>

            <Link
              to="/status"
              className="inline-block rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90"
            >
              View Status
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 rounded-3xl border border-gray-200 p-10 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {/* FAQ */}
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How do I create an account?
              </h3>

              <p className="leading-7 text-gray-600">
                You can register using the signup page by providing your email
                address and creating a password.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How can I reset my password?
              </h3>

              <p className="leading-7 text-gray-600">
                Use the “Forgot Password” option on the login page to receive
                password reset instructions.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How do I contact support?
              </h3>

              <p className="leading-7 text-gray-600">
                You can contact support through the Contact page or email our
                support team directly.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl bg-gray-100 p-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Still Need Help?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-gray-600">
            Our support team is available to assist you with any technical or
            account-related issues.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Get Support
          </Link>
        </div>
      </div>
    </div>
  );
}
