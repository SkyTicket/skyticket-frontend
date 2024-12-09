import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, type, id, value, onChange, placeholder, name, error }, ref) => {
    return (
      <div className="mb-4">
        <label className="mb-1 block text-sm text-black">{label}</label>
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-2xl border bg-white px-4 py-[14px] text-black focus:outline-none focus:ring-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error?.message && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
      </div>
    );
  },
);

export default Input;
