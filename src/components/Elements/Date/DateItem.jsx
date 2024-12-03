import React from "react";

const DateItem = ({ date, day, isActive, onClick }) => {
  return (
    <div className="divide-y divide-gray-200">

      <button
        onClick={onClick}
        className={`bg-white text-black flex flex-col items-center h-16 p-3 w-auto rounded-lg 
        focus:bg-[#7126B5] focus:text-white focus:outline-none hover:border-white hover:bg-[#A06ECE] hover:text-white`}
      >

        <span className="text-sm font-bold">{day}</span>
        <span className="pt-2 text-sm font-extralight">{date}</span>

      </button>

    </div>


  );
};

export default DateItem;
