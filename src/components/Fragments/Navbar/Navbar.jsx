import SearchBar from "../../Elements/Search/SearchBar";
import Logo from "../../Elements/Logo/Logo";
import Button from "../../Elements/Button/Button";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-lg">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <div className="relative flex h-auto flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-1 flex-col items-center gap-8 sm:flex-row">
            <Logo />
            <div className="w-full sm:block">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center">
            <Button type="login" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
