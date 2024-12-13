import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../../contexts/AuthContext";
import SearchBar from "../../Elements/Search/SearchBar";
import Logo from "../../Elements/Logo/Logo";
import Button from "../../Elements/Button/Button";

const Navbar = ({ showSearchBar = true, showLoginButton = false }) => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="bg-white py-4 shadow-lg">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <div className="relative flex h-auto flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-1 flex-col items-center gap-8 sm:flex-row">
            <Logo />
            {showSearchBar && isLoggedIn && (
              <div className="w-full sm:block">
                <SearchBar />
              </div>
            )}
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
