import React from "react";

const NotificationItem = ({ type, message, date, isRead , icon}) => {
  return (
    <div className="flex items-start justify-between border-b border-gray-200 p-4">
      <div className="flex items-start">
      <img
          src={icon}
          alt="Notification Icon"
          className="w-8 h-8 rounded-full bg-gray-100"
        />
        <div className="mb-2 ml-6">
        <p className="text-l text-gray-500">{type}</p>
        <p className="mb-2 text-l font-semibold text-gray-800">{message}</p>
          <p className="text-xs text-gray-500">Syarat dan Ketentuan berlaku!</p>
        </div>
      </div>
      <div className="text-right flex flex-row">
        <p className="text-xs text-gray-500 pr-4">{date}</p>
        <span
          className={`relative mt-1 h-2 w-2 rounded-full ${
            isRead ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default NotificationItem;
