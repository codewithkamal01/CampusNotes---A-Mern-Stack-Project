import { useSearchParams } from "react-router-dom";

function Contact() {
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");

  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Have questions, suggestions, or feedback? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Send a Message
            </h2>

            {/* Success Message */}
            {success && (
              <div className="mb-6 rounded-2xl bg-green-100 px-4 py-3 text-green-700">
                Message sent successfully ✅
              </div>
            )}

            <form
              action="https://formsubmit.co/kamalmanna607@gmail.com"
              method="POST"
              className="space-y-5"
            >
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect After Submit */}
              <input
                type="hidden"
                name="_next"
                value="https://campus-notes-one.vercel.app/contact?success=true"
              />

              {/* Subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Message"
              />

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Contact Information
              </h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">Email:</span>{" "}
                  kamalmanna607@gmail.com
                </p>

                <p>
                  <span className="font-semibold text-gray-900">Phone:</span>{" "}
                  +91 9876543210
                </p>

                <p>
                  <span className="font-semibold text-gray-900">Address:</span>{" "}
                  Kolkata, West Bengal, India
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-gray-100 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Support Hours
              </h2>

              <p className="leading-7 text-gray-600">
                Monday to Saturday
                <br />
                10:00 AM to 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
