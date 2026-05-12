import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import API from "../services/api";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success(res.data.message);

      navigate("/profile");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-slate-950">
      {/* Left Section */}
      <section className="relative hidden md:flex md:w-1/2 flex-col justify-between overflow-hidden bg-slate-100 dark:bg-slate-900 p-16">
        {/* Background Blur */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-t from-blue-500/10 to-transparent"></div>

        {/* Logo */}
        <div className="relative z-10">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-blue-600"
          >
            CampusNotes
          </Link>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            The curator of your academic journey.
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Access notes, PYQs, and student-led study resources designed for
            modern learners.
          </p>

          {/* Testimonial */}
          <div className="rounded-2xl border border-slate-200/60 bg-white/50 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex items-center gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB19-WJlscJVrbv6Rr8T2ZRITlbmvnJCnat5LyH-ihDsA-Kx8kXEmmx4dN2ge1iq60LHFuQpfJYV1ju_W1D4RIdIKR5uK_wTYIYUOZ_GJ7TZX2Jhvuec8rsodaqdQ27K12kZkY6_0JK16gBQi3JqMFW7gKjUhBFNtzel37wsoP_C3ABhNAvy6z8QrDesS2E1bVZOaCrRDXMAsl8H-FF7BsAWxyDdnzJPWuZBWshtcLgpxvFT_3__3uoajSA-bumDxFAlvHGPmiKpS2p"
                alt="Student"
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  "CampusNotes transformed how I prepare for finals."
                </p>

                <span className="text-xs uppercase tracking-widest text-slate-500">
                  Alex Rivera, CS Major
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            © 2026 CampusNotes
          </p>
        </div>
      </section>

      {/* Right Section */}
      <section className="flex flex-1 items-center justify-center px-6 py-12 md:px-20">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="mb-10 md:hidden">
            <Link
              to="/"
              className="text-3xl font-bold tracking-tight text-blue-600"
            >
              CampusNotes
            </Link>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
              Welcome Back
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Login to continue your academic journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                University Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@university.edu"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />

              <label
                htmlFor="remember"
                className="text-sm text-slate-600 dark:text-slate-400"
              >
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login to Portal"}
            </button>
          </form>

          {/* Register */}
          <div className="mt-10 border-t border-slate-200 pt-8 text-center dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-400">
              New here?
              <Link
                to="/register"
                className="ml-2 font-semibold text-blue-600 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
