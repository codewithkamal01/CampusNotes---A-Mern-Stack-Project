export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h1>

          <p className="text-lg text-gray-600">
            Please read these terms carefully before using our platform.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 rounded-3xl border border-gray-200 p-10 shadow-sm">
          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Acceptance of Terms
            </h2>

            <p className="leading-8 text-gray-600">
              By accessing or using this platform, you agree to comply
              with these Terms & Conditions and all applicable laws
              and regulations.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              User Responsibilities
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>• Provide accurate information</li>
              <li>• Maintain account security</li>
              <li>• Avoid illegal or harmful activities</li>
              <li>• Respect platform guidelines and policies</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Intellectual Property
            </h2>

            <p className="leading-8 text-gray-600">
              All content, designs, logos, graphics, and software on
              this platform are protected by intellectual property laws
              and may not be copied or redistributed without permission.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Account Termination
            </h2>

            <p className="leading-8 text-gray-600">
              We reserve the right to suspend or terminate user accounts
              that violate these terms or engage in activities harmful
              to the platform or other users.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Limitation of Liability
            </h2>

            <p className="leading-8 text-gray-600">
              We are not responsible for any direct or indirect damages
              resulting from the use or inability to use the platform.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Changes to Terms
            </h2>

            <p className="leading-8 text-gray-600">
              We may modify these Terms & Conditions at any time.
              Continued use of the platform after updates means you
              accept the revised terms.
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