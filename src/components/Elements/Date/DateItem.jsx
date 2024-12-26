import React from "react";

const DateItem = ({ day, date, fullDate, isActive, onClick, className }) => {
  return (
    <button
      onClick={() => onClick({ day, date, fullDate })}
      className={`flex flex-col items-center justify-center border-2 rounded-lg px-4 py-2 transition-all duration-200 ease-in-out ${
        isActive
          ? "text-black ring-2"
          : "hover:bg-gray-100"
      } ${className || ""} `}
    >
      <span className="text-xs font-medium">{day}</span>
      <span className="text-sm font-semibold">{date}</span>
    </button>
  );
};

export default DateItem;
