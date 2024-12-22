import React from "react";
import notifIcon from "../../../assets/icons/notif.svg";

const NotificationItem = ({ notification }) => {
  return (
    <div className="flex flex-col items-start justify-between border-gray-200 p-4 md:flex-row md:items-center w-full">
      <div className="flex w-full items-start md:w-auto">
          <img
          src={notifIcon}
          alt="Notification Icon"
          className="h-12 w-12  object-contain p-2"
        />
        <div className="ml-4 flex-1">
          <p className="text-sm text-gray-500 md:text-base">
            {notification.notification_type}
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-800 md:text-base">
            {notification.notification_message}
          </p>
          <p className="text-xs text-gray-500">Syarat dan Ketentuan berlaku!</p>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-between md:mt-0 md:w-auto">
        <p className="text-xs text-gray-500 md:text-sm">
          {notification.notification_created_at}
        </p>
        <span
          className={`ml-4 h-2 w-2 rounded-full ${
            notification.notification_is_read ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
      </div>
    </div>
  );
};


export default NotificationItem;
