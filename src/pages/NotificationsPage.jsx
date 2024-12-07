import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import HeaderLogin from "../components/Fragments/Header/Header";
import NavbarLogin from "../components/Fragments/Navbar/NavbarLogin";
import NotificationList from "../components/Fragments/Notification/NotificationList";

const NotificationsPage = () => {
  const handleFilterClick = () => {
    console.log("Filter button clicked!");
  };

  const handleSearchClick = () => {
    console.log("Search button clicked!");
  };

  return (
    <>
      <NavbarLogin isActive={"bell"} />
      <HeaderLogin
        title="Notifikasi"
        buttonText="Beranda"
        rightButtonIcon={faFilter}
        rightButtonText="Filter"
        rightButtonAction={handleFilterClick}
        searchButtonIcon={faSearch}
        searchButtonAction={handleSearchClick}
      />
      <NotificationList />
    </>
  );
};

export default NotificationsPage;
