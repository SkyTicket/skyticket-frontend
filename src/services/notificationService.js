import axiosInstance from '../api/axiosInstance';

const createNotification = async (notificationData) => {
  try {
    const response = await axiosInstance.post("/api/v1/notifications/create", notificationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create notification');
  }
};
const fetchNotificationsByUserId = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/notifications/get');
    return {
      notifications: response.data.notifications.map(notification => ({
        ...notification,
        id: notification.notification_id,
        type: notification.notification_type,
        message: notification.notification_message,
        isRead: notification.notification_is_read,
        createdAt: notification.notification_created_at,
        userId: notification.user_id
      }))
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch notifications");
  }
};

const updateNotificationReadStatus = async (notificationId, ) => {
  try {
    await axiosInstance.patch(`/api/v1/notifications/update/${notificationId}`, {
      notification_is_read: true
    });
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update notification status');
  }
};

export { createNotification, fetchNotificationsByUserId, updateNotificationReadStatus };

