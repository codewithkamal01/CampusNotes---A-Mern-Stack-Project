function UploadInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-xs
          font-bold
          uppercase
          tracking-widest
          text-slate-500
        "
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-4
          text-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          dark:border-slate-800
          dark:bg-slate-900
          dark:text-white
        "
      />
    </div>
  );
}

export default UploadInput;
