function ProfileSidebar({ user }) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">
        Account Information
      </h2>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Email
          </p>

          <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            {user?.email}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Joined
          </p>

          <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            MAY - 2026
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
