import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="flex shrink-0 items-center">
      <Link to="/">
        <img alt="SkyTicket Logo" src="/src/assets/icons/logo1.svg" className="w-auto" />
      </Link>
    </div>
  );
};

export default Logo;
