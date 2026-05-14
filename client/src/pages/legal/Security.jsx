export default function Security() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Security
          </h1>

          <p className="text-lg text-gray-600">
            We are committed to protecting user data and maintaining
            a secure platform experience.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 rounded-3xl border border-gray-200 p-10 shadow-sm">
          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Data Protection
            </h2>

            <p className="leading-8 text-gray-600">
              We use industry-standard security practices to help
              protect user information from unauthorized access,
              misuse, or disclosure.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Password Security
            </h2>

            <p className="leading-8 text-gray-600">
              User passwords are encrypted and securely stored.
              We recommend using strong passwords and enabling
              additional account security measures when available.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Secure Authentication
            </h2>

            <p className="leading-8 text-gray-600">
              Authentication systems are designed to prevent
              unauthorized account access and maintain session security.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Monitoring & Prevention
            </h2>

            <p className="leading-8 text-gray-600">
              We continuously monitor our systems for suspicious
              activity, vulnerabilities, and security threats to
              maintain platform reliability.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Responsible Disclosure
            </h2>

            <p className="leading-8 text-gray-600">
              If you discover a security vulnerability, please report
              it responsibly through our support or contact channels.
              We appreciate the efforts of security researchers and users.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Security Updates
            </h2>

            <p className="leading-8 text-gray-600">
              Our platform and dependencies are regularly updated
              to improve security, stability, and overall performance.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Last updated: May 2026
        </div>
      </div>
    </div>
  );
}