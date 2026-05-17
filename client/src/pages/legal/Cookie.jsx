export default function Cookie() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 dark:bg-slate-950 md:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Cookie Policy
          </h1>

          <p className="text-lg text-gray-600 dark:text-slate-400">
            Learn how we use cookies and similar technologies on our platform.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 rounded-3xl border border-gray-200 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              What Are Cookies?
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              Cookies are small text files stored on your device when you visit
              a website.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              How We Use Cookies
            </h2>

            <ul className="space-y-3 text-gray-600 dark:text-slate-400">
              <li>• To keep users logged in securely</li>
              <li>• To remember user preferences and settings</li>
              <li>• To improve website performance and functionality</li>
              <li>• To analyze traffic and user interactions</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Third-Party Cookies
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              Some third-party services may use cookies to provide additional
              functionality and insights.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Managing Cookies
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              You can control or disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Updates to This Policy
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              We may update this Cookie Policy from time to time.
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
