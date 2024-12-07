import SearchBar from "../../Elements/Search/SearchBar";
import Logo from "../../Elements/Logo/Logo";
import Button from "../../Elements/Button/Button";
import { Link } from "react-router-dom";

const Navbar = ({ showSearchBar = true, showLoginButton = true }) => {
  return (
    <nav className="bg-white py-4 shadow-lg">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <div className="relative flex h-auto flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-1 flex-col items-center gap-8 sm:flex-row">
            <Logo />
            {showSearchBar && (
              <div className="w-full sm:block">
                <SearchBar />
              </div>
            )}
          </div>
          {showLoginButton && (
            <div className="flex items-center">
              <Link to="/login">
                <Button type="login" className="px-4 py-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
