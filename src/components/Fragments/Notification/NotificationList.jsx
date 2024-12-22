import React from "react";
import NotificationItem from "../../Elements/Notification/NotificationItem";
import useNotifications from "../../../hooks/useNotifications";

const NotificationList = () => {
  const { notifications, isFetching, fetchError } = useNotifications();

  if (isFetching) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center text-gray-600">
          Loading notifications...
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center text-red-500">{fetchError}</div>
      </div>
    );
  }

  if (!notifications || notifications.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center text-gray-600">No notifications found</div>
      </div>
    );
  }

  return (
    <div class="mx-auto w-full max-w-7xl border-b-2 border-gray-200">
      {" "}
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.notification_id}
          notification={notification}
        />
      ))}
    </div>
  );
};

export default NotificationList;
