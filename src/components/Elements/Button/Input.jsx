const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 ${className}`}
      {...props}
    />
  );
};

export default Input;
