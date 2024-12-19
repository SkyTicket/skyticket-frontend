import { Link } from "react-router-dom";

const Logo = ({ size = "default", className = "", ...props }) => {
  const sizeClasses = {
    default: "w-auto",
  };

  return (
    <div className="flex shrink-0 items-center justify-center">
      <Link to="/">
        <img
          alt="SkyTicket Logo"
          src="/public/assets/icons/logo1.svg"
          className={`${sizeClasses[size]} ${className}`}
          {...props}
        />
      </Link>
    </div>
  );
};

export default Logo;
