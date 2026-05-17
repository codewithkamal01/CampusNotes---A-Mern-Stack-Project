export default function Security() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 dark:bg-slate-950 md:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Security
          </h1>

          <p className="text-lg text-gray-600 dark:text-slate-400">
            We are committed to protecting user data and maintaining a secure
            platform experience.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 rounded-3xl border border-gray-200 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Data Protection
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              We use industry-standard security practices to help protect user
              information.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Password Security
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              User passwords are encrypted and securely stored.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Secure Authentication
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              Authentication systems are designed to prevent unauthorized
              access.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Monitoring & Prevention
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              We monitor systems for suspicious activity and security threats.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Responsible Disclosure
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              Please report any security vulnerabilities responsibly.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Security Updates
            </h2>

            <p className="leading-8 text-gray-600 dark:text-slate-400">
              Our platform is regularly updated to improve security and
              stability.
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
