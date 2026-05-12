function ProfileStats({ totalNotes = 0, totalDownloads = 0 }) {
  const stats = [
    {
      label: "Uploaded Notes",
      value: totalNotes,
    },

    {
      label: "Downloads",
      value: totalDownloads,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            transition-all
            hover:-translate-y-1
            hover:shadow-lg
            dark:border-slate-800
            dark:bg-slate-950
          "
        >
          <p
            className="
              text-sm
              font-medium
              text-slate-500
              dark:text-slate-400
            "
          >
            {stat.label}
          </p>

          <h3
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ProfileStats;
