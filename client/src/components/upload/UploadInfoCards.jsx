// components/upload/UploadInfoCards.jsx

import { BadgeCheck, Eye, Sparkles } from "lucide-react";

function UploadInfoCards() {
  const cards = [
    {
      title: "High Quality",
      description:
        "Premium notes receive higher visibility and more downloads.",
      icon: BadgeCheck,

      styles:
        "bg-blue-50 border border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20",

      iconStyles:
        "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",

      titleStyles: "text-blue-900 dark:text-blue-100",

      textStyles: "text-blue-700/80 dark:text-blue-300/80",
    },

    {
      title: "Privacy Controls",
      description: "Manage who can access and view your uploaded documents.",
      icon: Eye,

      styles:
        "bg-white border border-slate-200 dark:bg-slate-950 dark:border-slate-800",

      iconStyles:
        "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300",

      titleStyles: "text-slate-900 dark:text-white",

      textStyles: "text-slate-600 dark:text-slate-400",
    },

    {
      title: "Earn Credits",
      description:
        "Contributor rewards and academic credit system will be available soon.",
      icon: Sparkles,
      styles:
        "bg-red-50 border border-red-100 dark:bg-red-500/10 dark:border-red-500/20",
      iconStyles:
        "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400",
      titleStyles: "text-red-900 dark:text-red-100",
      textStyles: "text-red-700/80 dark:text-red-300/80",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={`
              group
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              ${card.styles}
            `}
          >
            {/* Icon */}
            <div
              className={`
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                transition-transform
                group-hover:scale-110
                ${card.iconStyles}
              `}
            >
              <Icon size={22} />
            </div>

            {/* Title */}
            <h4
              className={`
                mb-2
                text-lg
                font-bold
                tracking-tight
                ${card.titleStyles}
              `}
            >
              {card.title}
            </h4>

            {/* Description */}
            <p
              className={`
                text-sm
                leading-relaxed
                ${card.textStyles}
              `}
            >
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default UploadInfoCards;
