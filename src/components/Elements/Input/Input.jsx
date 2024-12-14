import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, type, id, name, value, onChange, placeholder, error }, ref) => {
    return (
      <div className="relative mb-9">
        <label className="mb-2 block text-sm text-black">{label}</label>
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-2xl border h-12 bg-white px-4 py-[14px] text-black focus:outline-none focus:ring-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error?.message && (
          <p className="absolute mt-1 text-sm text-red-500 font-medium">{error.message}</p>
        )}
      </div>
    );
  },
);

export default Input;