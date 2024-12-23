import React, { useEffect, useState } from "react";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

import HeaderLogin from "../components/Fragments/Header/Header";
import NotificationList from "../components/Fragments/Notification/NotificationList";
import Navbar from "../components/Fragments/Navbar/Navbar";
import FooterMobile from "../components/Elements/Footer/FooterMobile";
import { AuthProvider } from "../contexts/AuthContext";
import { NotificationProvider } from "../contexts/NotificationContext";
import useNotifications from "../hooks/useNotifications";

const NotificationsPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { markAllAsRead } = useNotifications();
  const handleFilterClick = () => {};

  const handleSearchClick = () => {};

  useEffect(() => {
    markAllAsRead();
    const updateScreen = () => setIsMobile(window.innerWidth < 500);
    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, [markAllAsRead]);

  return (
    <AuthProvider>
      <NotificationProvider>
        <>
          <Navbar isActive={"bell"} />
          <HeaderLogin
            title="Notifikasi"
            buttonText="Beranda"
            rightButtonIcon={faFilter}
            rightButtonText="Filter"
            rightButtonAction={handleFilterClick}
            searchButtonIcon={faSearch}
            searchButtonAction={handleSearchClick}
          />
          <div className="mx-auto flex justify-center gap-4">
            <NotificationList />
          </div>
        </>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default NotificationsPage;
