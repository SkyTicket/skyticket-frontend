const OtpInput = ({ value, onChange, onKeyDown, id }) => {
  return (
    <input
      id={id}
      type="text"
      maxLength="1"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="h-12 w-12 rounded-2xl border border-gray-300 bg-white text-center text-lg text-black outline-none transition focus:outline-none focus:ring-2"
    />
  );
};

export default OtpInput;
