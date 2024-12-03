import Logo from "../../Elements/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";

const NavbarLogin = ({ isActive }) => {
  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <div className="relative flex h-auto flex-row items-center justify-between">
          <Logo />
          <div className="flex gap-4">
            <FontAwesomeIcon
              icon={faListUl}
              className={`h-6 w-6 cursor-pointer ${isActive == "list" ? "text-purple-500" : "text-black"}`}
            />
            <FontAwesomeIcon
              icon={faBell}
              className={`h-6 w-6 cursor-pointer ${isActive == "bell" ? "text-purple-500" : "text-black"}`}
            />
            <FontAwesomeIcon
              icon={faUser}
              className={`h-6 w-6 cursor-pointer ${isActive == "user" ? "text-purple-500" : "text-black"}`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;
