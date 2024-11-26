import SearchBar from "../../Elements/Search/SearchBar";
import LoginButton from "../../Elements/Button/LoginButton";
import Logo from "../../Elements/Logo/Logo";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <div className="relative flex items-center justify-between h-auto gap-8 flex-col sm:flex-row">
          <div className="flex flex-1 items-center gap-8 flex-col sm:flex-row">
            <Logo />
            <div className="w-full sm:block">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center">
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
