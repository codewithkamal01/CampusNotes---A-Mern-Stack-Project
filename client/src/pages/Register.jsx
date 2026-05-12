import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return toast.warning("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      toast.success(res.data.message || "Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="h-screen overflow-hidden w-full bg-slate-100 dark:bg-slate-950 px-6 py-7 flex items-center justify-center">
        <div className="relative w-full max-w-xl overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 md:p-8">
          {/* Decorative Blur */}
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"></div>

          {/* Header */}
          <header className="relative z-10 mb-4 text-center">
            <Link
              to="/"
              className="mb-3 block text-2xl font-black tracking-tight text-blue-600"
            >
              CampusNotes
            </Link>

            <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
              Join the Community
            </h2>

            <p className="mx-auto max-w-sm text-slate-600 dark:text-slate-400">
              Start your journey as an academic curator today.
            </p>
          </header>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Julian Casablancas"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="julian@university.edu"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="md:col-span-2 flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />

              <label
                htmlFor="terms"
                className="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>

          {/* Footer */}
          <footer className="relative z-10 mt-4 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Already part of the network?
              <Link
                to="/login"
                className="ml-2 font-semibold text-blue-600 hover:underline"
              >
                Sign in instead
              </Link>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
