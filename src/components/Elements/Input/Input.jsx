import { forwardRef } from "react";

const Input = forwardRef(
  (
    { label, type, id, name, value, onChange, placeholder, error, ...props },
    ref,
  ) => {
    return (
      <div className="mb-8">
        <label htmlFor={id} className="mb-1 block text-sm text-black">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-12 w-full rounded-2xl border bg-white px-4 py-[14px] text-black focus:outline-none focus:ring-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
        {error && (
          <p className="absolute mt-1 text-sm font-medium text-red-500">
            {typeof error === "string" ? error : error.message}
          </p>
        )}
      </div>
    );
  },
);

export default Input;
