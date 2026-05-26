import { AlertCircle } from "lucide-react";

function UploadInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
  error,
  required = false,
}) {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label
        htmlFor={name}
        className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-zinc-700
          dark:text-zinc-300
        "
      >
        {Icon && <Icon className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />}

        <span>{label}</span>

        {required && <span className="text-red-500">*</span>}
      </label>

      {/* Input */}
      <div className="relative">
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            h-14
            w-full
            rounded-2xl
            border
            bg-white
            px-4
            text-sm
            text-zinc-800
            shadow-sm
            outline-none
            transition-all
            duration-200

            placeholder:text-zinc-400

            hover:border-zinc-300

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/10

            dark:bg-zinc-900
            dark:text-zinc-100
            dark:placeholder:text-zinc-500
            dark:hover:border-zinc-600

            ${
              error
                ? `
                  border-red-300
                  focus:border-red-500
                  focus:ring-red-500/10
                  dark:border-red-800
                `
                : `
                  border-zinc-200
                  dark:border-zinc-800
                `
            }
          `}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

export default UploadInput;
