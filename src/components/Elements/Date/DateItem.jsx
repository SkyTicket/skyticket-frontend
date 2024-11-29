import React from "react";

const DateItem = ({ date, day, isActive, onClick }) => {
  return (
    <div className="divide-y divide-gray-200">
      <button
        onClick={onClick}
        className={`flex flex-col items-center h-16 p-3 w-auto rounded-lg transition-colors
          ${
            isActive
              ? "bg-[#A06ECE] text-white"
              : "hover:bg-purple-400 hover:text-white"
          }`}
      >
        <span className="text-sm font-bold">{day}</span>
        <span className="pt-2 text-sm font-extralight">{date}</span>
      </button>
    </div>
  );
};

export default DateItem;
