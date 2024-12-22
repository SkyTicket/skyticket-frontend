import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import useNotifications from "../../../hooks/useNotifications";
import SearchBar from "../../Elements/Search/SearchBar";

import Button from "../../Elements/Button/Button";
import Logo from "../../Elements/Logo/Logo";

const Navbar = ({ showSearchBar = true, showLoginButton = false }) => {
  const { isLoggedIn } = useAuth();
  const { notifications, fetchNotifications } = useNotifications();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchNotifications();
    }
  }, [isLoggedIn]);

  if (isMobile) {
    return null;
  }

  return (
    <nav className="bg-white py-4 shadow-lg">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <div
          className={`relative flex h-auto items-center justify-between gap-4 md:flex-row md:gap-8 ${isMobile ? "flex-row" : "flex-col"}`}
        >
          <div
            className={`flex flex-col items-center gap-4 md:flex-row md:gap-8 ${!isMobile && "flex-1"}`}
          >
            <Logo />
            {showSearchBar && !isMobile && <SearchBar />}
          </div>

          {isLoggedIn ? (
            <div className="flex items-center gap-6">
              <Link to="/history">
                <FontAwesomeIcon
                  icon={faListUl}
                  className="h-6 w-6 cursor-pointer text-black hover:text-purple-500"
                />
              </Link>
              <Link to="/notification">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="h-6 w-6 cursor-pointer text-black hover:text-purple-500"
                  />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                      {notifications.length}
                    </span>
                  )}
                </div>
              </Link>
              <Link to="/account">
                <FontAwesomeIcon
                  icon={faUser }
                  className="h-6 w-6 cursor-pointer text-black hover:text-purple-500"
                />
              </Link>
            </div>
          ) : (
            showLoginButton && (
              <div className="flex items-center">
                <Link to="/login">
                  <Button type="login" className="px-4 py-2" />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;