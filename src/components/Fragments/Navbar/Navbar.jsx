import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../Elements/Logo/Logo";
import Button from "../../Elements/Button/Button";
import SearchBar from "../../Elements/Search/SearchBar";
import { useAuth } from "../../../contexts/AuthContext";

const Navbar = ({ showSearchBar = true, showLoginButton = false }) => {
  const { isLoggedIn } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                <FontAwesomeIcon
                  icon={faBell}
                  className="h-6 w-6 cursor-pointer text-black hover:text-purple-500"
                />
              </Link>
              <Link to="/account">
                <FontAwesomeIcon
                  icon={faUser}
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
