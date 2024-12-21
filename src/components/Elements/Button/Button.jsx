import LoginIcon from "/assets/icons/login.svg";
import SearchIcon from "/assets/icons/search.svg";

const buttonIcon = {
  login: <img src={LoginIcon} alt="Login Icon" className="h-5 w-5" />,
  search: <img src={SearchIcon} alt="Search Icon" className="h-5 w-5" />,
};

const Button = ({
  type = "submit",
  children = "Masuk",
  color = "purple",
  onClick,
  width,
  height,
  className,
  isMobile = false,
}) => {
  const baseStyles = `flex h-12 items-center justify-center gap-2 text-center shadow-lg focus:outline-none focus:ring transition-colors duration-300`;

  const colorStyles = {
    purple: `bg-[#7126B5] text-white hover:bg-purple-600 active:bg-[#4B1979] active:ring-2 active:ring-purple-400`,
    gray: `bg-gray-600 text-white hover:bg-gray-500 active:bg-gray-700 active:ring-2 active:ring-gray-400`,
    green: `bg-[#73CA5C] text-white hover:border-2 hover:bg-white hover:text-[#73CA5C]`,
  };

  const widthStyles = {
    sm: "min-w-[80px] max-w-[105px]",
    md: "min-w-[106px] max-w-[126px]",
    lg: "min-w-[150px] max-w-[968px]",
  };

  const visibilityClass = isMobile ? "hidden md:flex" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${colorStyles[color]} ${widthStyles[width]} ${height} ${visibilityClass} ${className}`}
    >
      {buttonIcon[type] && (
        <span className="flex items-center">{buttonIcon[type]}</span>
      )}
      {children}
    </button>
  );
};

export default Button;