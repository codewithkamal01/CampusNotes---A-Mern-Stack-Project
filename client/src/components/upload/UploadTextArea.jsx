function UploadTextarea({ label, name, value, onChange, placeholder }) {
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

      <textarea
        rows={5}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-4
          py-3
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

export default UploadTextarea;
