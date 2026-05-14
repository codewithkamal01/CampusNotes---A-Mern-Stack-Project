export default function Privacy() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how
            we collect, use, and protect your information.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 rounded-3xl border border-gray-200 p-10 shadow-sm">
          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Information We Collect
            </h2>

            <p className="leading-8 text-gray-600">
              We may collect personal information such as your name,
              email address, profile information, and usage data when
              you interact with our platform.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              How We Use Your Information
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>• To provide and improve our services</li>
              <li>• To personalize user experience</li>
              <li>• To communicate updates and support information</li>
              <li>• To maintain platform security and performance</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Data Protection
            </h2>

            <p className="leading-8 text-gray-600">
              We implement security measures to help protect user data
              from unauthorized access, disclosure, or misuse.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Third-Party Services
            </h2>

            <p className="leading-8 text-gray-600">
              Our platform may use third-party services such as
              analytics tools, authentication providers, or cloud
              storage services that may process user data according
              to their own privacy policies.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              User Rights
            </h2>

            <p className="leading-8 text-gray-600">
              Users may request access, correction, or deletion of
              their personal information by contacting support.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Policy Updates
            </h2>

            <p className="leading-8 text-gray-600">
              We may update this Privacy Policy periodically to reflect
              changes in our services, technology, or legal requirements.
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