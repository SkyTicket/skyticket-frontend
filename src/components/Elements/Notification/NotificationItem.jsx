import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NotificationItem = ({ notification, onMarkAsRead }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !notification.notification_is_read) {
          onMarkAsRead(notification.notification_id);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [notification, onMarkAsRead]);

  const handleClick = () => {
    if (!notification.notification_is_read) {
      onMarkAsRead(notification.notification_id);
    }
  };

  return (
    <Link 
      to="/" 
      className="block transition-colors hover:bg-gray-50/80" 
      onClick={handleClick}
    >
      <div
        ref={ref}
        className="relative flex gap-3 p-4 sm:gap-4 sm:p-5"
      >
        <div className="relative shrink-0">
          <img
            src="/assets/icons/notif.svg"
            alt=""
            className="h-10 w-10 rounded-full object-cover sm:h-8 sm:w-8"
          />
          <span
            className={`absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white ${
              notification.notification_is_read ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-start justify-between gap-2">
            <span className="text-sm font-medium text-gray-900 sm:text-base">
              {notification.notification_type}
            </span>
            <span className="shrink-0 text-xs text-gray-500 sm:text-sm">
              {notification.notification_created_at}
            </span>
          </div>
          
          <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
            {notification.notification_message}
          </p>
          
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
              Terms & Conditions Apply
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NotificationItem;
