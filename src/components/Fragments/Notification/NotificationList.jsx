import React from "react";
import useNotifications from "../../../hooks/useNotifications";
import NotificationItem from "../../Elements/Notification/NotificationItem";

const NotificationList = () => {
  const { notifications, isFetching, fetchError, markNotificationAsRead } = useNotifications();

  if (isFetching) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>
          <p className="text-sm text-gray-600">Loading notifications...</p>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex min-h-[200px] items-center justify-center p-4">
        <div className="rounded-lg bg-red-50 p-4 text-center">
          <p className="text-sm text-red-600">{fetchError}</p>
          <button 
            className="mt-2 text-sm text-red-600 underline hover:text-red-700"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!notifications || notifications.length === 0) {
    return (
      <div className="flex min-h-[200px] items-center justify-center p-4">
        <div className="text-center">
          <img
            src="/assets/icons/empty-notification.svg"
            alt="No notifications"
            className="mx-auto mb-3 h-16 w-16 opacity-60"
          />
          <p className="text-sm text-gray-500">No notifications yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-screen-xl divide-y divide-gray-100">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.notification_id}
          notification={notification}
          onMarkAsRead={markNotificationAsRead}
        />
      ))}
    </div>
  );
};

export default NotificationList;
