import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FeatureCard({
  title,
  description,
  icon: Icon,
  image,
  buttonText,
  buttonLink = "/",
  variant = "default",
  colSpan = "md:col-span-4",
}) {
  const variants = {
    default:
      "bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800",

    primary:
      "bg-gradient-to-br from-blue-600 to-blue-700 text-white border border-blue-500/20",

    secondary:
      "bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800",
  };

  return (
    <div
      className={`
        ${colSpan}
        group
        relative
        overflow-hidden
        rounded-[2rem]
        p-6
        md:p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        shadow-lg
        min-h-[320px]
        flex
        flex-col
        justify-between
        ${variants[variant]}
      `}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Background Image */}
      {image && (
        <div className="absolute inset-y-0 right-0 w-[45%] overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent to-white dark:to-slate-950"></div>

          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-[0.3] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.5]"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col">
        {/* Icon */}
        {Icon && (
          <div
            className={`
              mb-6
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              backdrop-blur-sm
              ${
                variant === "primary"
                  ? "bg-white/10 text-white"
                  : "bg-blue-50 text-blue-600 dark:bg-slate-800"
              }
            `}
          >
            <Icon size={28} strokeWidth={2.2} />
          </div>
        )}

        {/* Text Content */}
        <div className="flex-1">
          <h3
            className={`
              mb-3
              text-2xl
              md:text-3xl
              font-bold
              tracking-tight
              leading-tight
              ${
                variant === "primary"
                  ? "text-white"
                  : "text-slate-900 dark:text-white"
              }
            `}
          >
            {title}
          </h3>

          <p
            className={`
              max-w-md
              text-base
              md:text-lg
              leading-relaxed
              ${
                variant === "primary"
                  ? "text-white/80"
                  : "text-slate-600 dark:text-slate-400"
              }
            `}
          >
            {description}
          </p>
        </div>

        {/* CTA */}
        {buttonText && (
          <div className="mt-8">
            <Link
              to={buttonLink}
              className={`
                inline-flex
                items-center
                gap-2
                text-sm
                md:text-base
                font-semibold
                transition-all
                duration-300
                group-hover:gap-4
                ${variant === "primary" ? "text-white" : "text-blue-600"}
              `}
            >
              {buttonText}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
