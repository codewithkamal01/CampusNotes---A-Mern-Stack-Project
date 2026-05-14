import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Sitemap</h1>

          <p className="text-lg text-gray-600">
            Quickly navigate through all important pages of the platform.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Company
            </h2>

            <div className="flex flex-col gap-4 text-gray-600">
              <Link to="/about" className="transition hover:text-black">
                About Us
              </Link>

              <Link to="/contact" className="transition hover:text-black">
                Contact
              </Link>

              <Link to="/careers" className="transition hover:text-black">
                Careers
              </Link>

              <Link to="/blog" className="transition hover:text-black">
                Blog
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">Legal</h2>

            <div className="flex flex-col gap-4 text-gray-600">
              <Link
                to="/privacy-policy"
                className="transition hover:text-black"
              >
                Privacy Policy
              </Link>

              <Link to="/terms" className="transition hover:text-black">
                Terms & Conditions
              </Link>

              <Link to="/cookies" className="transition hover:text-black">
                Cookie Policy
              </Link>

              <Link to="/security" className="transition hover:text-black">
                Security
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Support
            </h2>

            <div className="flex flex-col gap-4 text-gray-600">
              <Link to="/support" className="transition hover:text-black">
                Support Center
              </Link>

              <Link to="/status" className="transition hover:text-black">
                System Status
              </Link>

              <Link to="/login" className="transition hover:text-black">
                Login
              </Link>

              <Link to="/register" className="transition hover:text-black">
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 rounded-3xl bg-gray-100 p-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Need Help?</h2>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-gray-600">
            If you cannot find the page you are looking for, please contact our
            support team for assistance.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
