import React, { useEffect, useState } from "react";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

import HeaderLogin from "../components/Fragments/Header/Header";
import NotificationList from "../components/Fragments/Notification/NotificationList";
import Navbar from "../components/Fragments/Navbar/Navbar";
import FooterMobile from "../components/Elements/Footer/FooterMobile";
import { AuthProvider } from "../contexts/AuthContext";

const NotificationsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleFilterClick = () => {
    console.log("Filter button clicked!");
  };

  const handleSearchClick = () => {
    console.log("Search button clicked!");
  };

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 500);
    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return (
    <AuthProvider>
      {isMobile ? (
        <>
          <p className="mx-8 pt-10 text-2xl font-semibold text-black">
            Notifikasi
          </p>
          <NotificationList />
          <FooterMobile active={"notifikasi"} />
        </>
      ) : (
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
          <div className="mx-auto flex justify-between gap-4">
            <NotificationList />
          </div>
        </>
      )}
    </AuthProvider>
  );
};

export default NotificationsPage;
