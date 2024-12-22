import React, { createContext, useState, useEffect } from "react";
import { createNotification, fetchNotificationsByUserId } from "../services/notificationService";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(null);

  // Fetch Notifications
  const fetchNotifications = async () => {
    setIsFetching(true);
    setFetchError(null);
    try {
      const data = await fetchNotificationsByUserId();
      setNotifications(data.notifications);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

  // Send Notification
  const sendNotification = async (notificationData) => {
    setIsSending(true);
    setSendError(null);
    try {
      const result = await createNotification(notificationData);
      await fetchNotifications(); 
      return result;
    } catch (err) {
      setSendError(err.message);
      throw err;
    } finally {
      setIsSending(false);
    }
  };
  const addNotification = (notification) => {
    setNotifications(prev => [...prev, notification]);
  };

  const clearNotification = (notificationId) => {
    setNotifications(prev => prev.filter(notif => notif.id !== notificationId));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };
 
  useEffect(() => {
    fetchNotifications();
  }, []);

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
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
