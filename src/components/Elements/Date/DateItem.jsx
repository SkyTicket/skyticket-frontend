import React from 'react';

const DateItem = ({ day, date, fullDate, isActive, onClick, className }) => {
  return (
    <button
      onClick={() => onClick({ day, date, fullDate })}
      className={`
        rounded-lg px-4 py-2
        flex flex-col items-center justify-center
        transition-all duration-200 ease-in-out
        ${isActive ? 
          'ring-2 ring-purple-600 bg-purple-100 text-purple-800' : 
          'hover:bg-gray-100'
        }
        ${className || ''}
      `}
    >
      <span className="text-xs font-medium">{day}</span>
      <span className="text-sm font-semibold">{date}</span>
    </button>
  );
};

export default DateItem;