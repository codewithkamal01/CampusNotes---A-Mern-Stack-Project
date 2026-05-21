import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);

      setTimeout(() => {
        navigate("/");
      }, 1800);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-100 px-6 dark:bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black tracking-tight text-blue-600">
            CampusNotes
          </h1>
        </div>
        
        {/* Loader */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Animated Loader */}
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
            <Loader2 size={38} className="animate-spin text-blue-600" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Logging you in
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Please wait while we securely authenticate your Google account.
          </p>

          {/* Progress Bar */}
          <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-600"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OAuthSuccess;
