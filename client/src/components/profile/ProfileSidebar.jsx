import { Mail, CalendarDays, ShieldCheck } from "lucide-react";

function ProfileSidebar({ user }) {
  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Recently Joined";

  return (
    <aside
      className="
        w-full min-w-0
        overflow-hidden rounded-3xl
        border border-slate-200/80
        bg-white/90
        p-6 backdrop-blur
        shadow-sm
        transition-all duration-300
        hover:shadow-md
        dark:border-slate-800
        dark:bg-slate-950/90
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="
            flex h-11 w-11 items-center justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-500 to-violet-500
            text-white shadow-md
          "
        >
          <ShieldCheck size={20} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Account Info
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Personal details & activity
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="mt-7 space-y-4">
        {/* Email */}
        <div
          className="
            group rounded-2xl
            border border-slate-200
            bg-slate-50/80
            p-4 transition-all
            hover:border-blue-200
            hover:bg-blue-50/60
            dark:border-slate-800
            dark:bg-slate-900/70
            dark:hover:border-slate-700
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                mt-0.5 flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-blue-100 text-blue-600
                dark:bg-blue-950/50
                dark:text-blue-400
              "
            >
              <Mail size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="
                  text-xs font-semibold uppercase
                  tracking-wider text-slate-400
                "
              >
                Email Address
              </p>

              <p
                className="
    mt-1 break-all
    text-sm font-medium
    leading-relaxed
    text-slate-700
    dark:text-slate-300
  "
              >
                {user?.email || "No email added"}
              </p>
            </div>
          </div>
        </div>

        {/* Joined */}
        <div
          className="
            group rounded-2xl
            border border-slate-200
            bg-slate-50/80
            p-4 transition-all
            hover:border-violet-200
            hover:bg-violet-50/60
            dark:border-slate-800
            dark:bg-slate-900/70
            dark:hover:border-slate-700
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                mt-0.5 flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-violet-100 text-violet-600
                dark:bg-violet-950/50
                dark:text-violet-400
              "
            >
              <CalendarDays size={18} />
            </div>

            <div>
              <p
                className="
                  text-xs font-semibold uppercase
                  tracking-wider text-slate-400
                "
              >
                Member Since
              </p>

              <p
                className="
                  mt-1 text-sm font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
                {joinedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
