import { FileText, Download, TrendingUp } from "lucide-react";

function ProfileStats({ totalNotes = 0, totalDownloads = 0 }) {
  const stats = [
    {
      label: "Uploaded Notes",
      value: totalNotes,
      icon: FileText,
      gradient: "from-blue-500/15 to-cyan-500/10",
      iconStyle:
        "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    },

    {
      label: "Downloads",
      value: totalDownloads,
      icon: Download,
      gradient: "from-violet-500/15 to-fuchsia-500/10",
      iconStyle:
        "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className={`
              group relative overflow-hidden
              rounded-3xl
              border border-slate-200/80
              bg-white/90
              p-6 backdrop-blur
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
              dark:border-slate-800
              dark:bg-slate-950/90
            `}
          >
            {/* Background Glow */}
            <div
              className={`
                absolute inset-0 opacity-0
                bg-gradient-to-br ${stat.gradient}
                transition-opacity duration-300
                group-hover:opacity-100
              `}
            />

            {/* Content */}
            <div className="relative flex items-start justify-between">
              <div>
                <p
                  className="
                    text-sm font-medium
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {stat.label}
                </p>

                <h3
                  className="
                    mt-3 text-4xl
                    font-bold tracking-tight
                    text-slate-900
                    dark:text-white
                  "
                >
                  {stat.value}
                </h3>

                <div
                  className="
                    mt-4 inline-flex items-center
                    gap-1 rounded-full
                    bg-emerald-100/80
                    px-2.5 py-1
                    text-xs font-semibold
                    text-emerald-700
                    dark:bg-emerald-950/40
                    dark:text-emerald-400
                  "
                >
                  <TrendingUp size={13} />
                  Active
                </div>
              </div>

              {/* Icon */}
              <div
                className={`
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  shadow-sm transition-transform
                  duration-300 group-hover:scale-110
                  ${stat.iconStyle}
                `}
              >
                <Icon size={26} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileStats;
