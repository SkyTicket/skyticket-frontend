const DateItem = ({ date, day, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-3 rounded-lg transition-colors
          ${isActive ? "bg-purple-500 text-white" : "hover:bg-gray-100"}`}
    >
      <span className="text-sm font-bold">{day}</span>
      <span className="text-xl font-extralight">{date}</span>
    </button>
  );
};

export default DateItem;