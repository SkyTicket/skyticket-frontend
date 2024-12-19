import React from "react";

const NotificationItem = ({ type, message, date, isRead, icon }) => {
  return (
    <div className="flex flex-col items-start justify-between border-b border-gray-200 p-4 md:flex-row md:items-center">
      <div className="flex w-full items-start md:w-auto">
        <img
          src={icon}
          alt="Notification Icon"
          className="w-10 h-10 rounded-full bg-gray-100"
        />
        <div className="ml-4 flex-1">
          <p className="text-sm text-gray-500 md:text-base">{type}</p>
          <p className="mt-1 text-sm font-semibold text-gray-800 md:text-base">
            {message}
          </p>
          <p className="text-xs text-gray-500">Syarat dan Ketentuan berlaku!</p>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-between md:mt-0 md:w-auto">
        <p className="text-xs text-gray-500 md:text-sm">{date}</p>
        <span
          className={`ml-4 h-2 w-2 rounded-full ${
            isRead ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default NotificationItem;
