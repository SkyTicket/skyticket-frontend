import React, { createContext, useState, useEffect, useCallback } from "react";
import {
  createNotification,
  fetchNotificationsByUserId,
} from "../services/notificationService";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);

  const clearNotification = (notificationId) => {
    setNotifications((prev) => {
      const notifToRemove = prev.find(notif => notif.id === notificationId);
      if (notifToRemove && !notifToRemove.isRead) {
        setUnreadCount(count => Math.max(0, count - 1));
      }
      return prev.filter((notif) => notif.id !== notificationId);
    });
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    setUnreadCount(0);
  };

  const markAllAsRead = async () => {
    try {
      const unreadNotifications = notifications.filter(notif => !notif.isRead);
      await Promise.all(
        unreadNotifications.map(notif => 
          updateNotificationReadStatus(notif.notification_id, true)
        )
      );

      setNotifications(prevNotifications =>
        prevNotifications.map(notif => ({ ...notif, isRead: true }))
      );
      setUnreadCount(0);
      
      await fetchNotifications();
    } catch (error) {
      console.error('Failed to mark notifications as read:', error);
    }
  };
  const fetchNotifications = async () => {
    setIsFetching(true);
    setFetchError(null);
    try {
      const data = await fetchNotificationsByUserId();
      setNotifications(data.notifications);
      const unreadCount = data.notifications.filter(
        notif => !notif.notification_is_read
      ).length;
      setUnreadCount(unreadCount);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsFetching(false);
    }
  };
  const addNotification = (notification) => {
    setNotifications((prev) => [...prev, notification]);
    if (!notification.isRead) {
      setUnreadCount((prev) => prev + 1);
    }
  };
  

  const sendNotification = async (notificationData) => {
    setIsSending(true);
    setSendError(null);
    try {
      const result = await createNotification(notificationData);
      addNotification({
        ...result,
        isRead: false
      });
      return result;
    } catch (err) {
      setSendError(err.message);
      throw err;
    } finally {
      setIsSending(false);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        clearNotification,
        clearAllNotifications,
        fetchNotifications,
        isFetching,
        fetchError,
        sendNotification,
        isSending,
        sendError,
        unreadCount,
        setUnreadCount,
        markAllAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
