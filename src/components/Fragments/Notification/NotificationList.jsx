import React from "react";
import NotificationItem from "../../Elements/Notification/Notificationtem";

const NotificationList = () => {
  const notifications = [
    {
      icon: "/src/assets/icons/notif.svg",
      type: "Promosi",
      message: "Dapatkan Potongan 50% Tiket!",
      date: "20 Maret, 14:04",
      isRead: true,
    },
    {
      icon: "/src/assets/icons/notif.svg",
      type: "Notifikasi",
      message:
        "Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!",
      date: "5 Maret, 14:04",
      isRead: false,
    },
  ];

  return (
    <div className="mx-auto w-3/4 pr-44">
      {notifications.map((notif, index) => (
        <NotificationItem key={index} {...notif} />
      ))}
    </div>
  );
};

export default NotificationList;
