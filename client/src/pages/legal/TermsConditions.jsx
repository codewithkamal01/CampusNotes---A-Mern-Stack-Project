export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 dark:bg-slate-950 md:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Terms & Conditions
          </h1>

          <p className="text-lg text-gray-600 dark:text-slate-400">
            Please read these terms carefully before using our platform.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 rounded-3xl border border-gray-200 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Acceptance of Terms
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              By accessing or using this platform, you agree to comply with
              these Terms & Conditions.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              User Responsibilities
            </h2>

            <ul className="space-y-3 text-gray-600 dark:text-slate-400">
              <li>• Provide accurate information</li>
              <li>• Maintain account security</li>
              <li>• Avoid illegal or harmful activities</li>
              <li>• Respect platform guidelines and policies</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Intellectual Property
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              All content and platform materials are protected by intellectual
              property laws.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Account Termination
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              We may suspend or terminate accounts that violate these terms.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Limitation of Liability
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              We are not responsible for damages resulting from the use of the
              platform.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Changes to Terms
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              We may update these Terms & Conditions periodically.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-500 dark:text-slate-500">
          Last updated: May 2026
        </div>
      </div>
    </div>
  );
}
