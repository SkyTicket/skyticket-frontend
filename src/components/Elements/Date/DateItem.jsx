import React from "react";

const DateItem = ({ date, day, isActive, onClick }) => {
  return (
    <div className="divide-y divide-gray-200">
      <button
        onClick={onClick}
        className={`flex h-16 w-auto flex-col items-center rounded-lg bg-white p-3 text-black hover:border-white hover:bg-[#A06ECE] hover:text-white focus:bg-[#7126B5] focus:text-white focus:outline-none`}
      >
        <span className="text-sm font-bold">{day}</span>
        <span className="pt-2 text-sm font-extralight">{date}</span>
      </button>
    </div>
  );
};

export default DateItem;
