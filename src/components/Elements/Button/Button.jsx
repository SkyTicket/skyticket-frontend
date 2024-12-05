import LoginIcon from "../../../assets/icons/login.svg";
import SearchIcon from "../../../assets/icons/search.svg";

const buttonIcon = {
  login: <img src={LoginIcon} alt="Login Icon" className="h-5 w-5" />,
  search: <img src={SearchIcon} alt="Search Icon" className="h-5 w-5" />,
};

const Button = ({
  type = "login",
  children = "Masuk",
  onAction,
  color = "purple",
  width = "",
  height = "",
  className = "",
}) => {
  const baseStyles = `flex h-12 items-center justify-center gap-2 rounded-xl py-2 px-4 text-sm text-center font-normal shadow-lg focus:outline-none focus:ring transition-colors duration-300`;

  const colorStyles = {
    purple: `bg-[#7126B5] text-white hover:bg-purple-600 active:bg-[#4B1979] active:ring-4 active:ring-purple-400`,
    gray: `bg-gray-600 text-white hover:bg-gray-500 active:bg-gray-700 active:ring-4 active:ring-gray-400`,
    blue: `bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 active:ring-4 active:ring-blue-400`,
    green: `bg-[#73CA5C] text-white hover:border-2 hover:bg-white hover:text-[#73CA5C]`,
  };

  const widthStyles = {
    sm: "min-w-[80px] max-w-[105px]",
    md: "min-w-[106px] max-w-[126px]",
    lg: "min-w-[150px] max-w-[968px]",
  };

  return (
    <button
      type="button"
      onClick={onAction}
      className={`${baseStyles} ${colorStyles[color]} ${widthStyles[width]} ${height} ${className}`}
    >
      {buttonIcon[type] && (
        <span className="flex items-center">{buttonIcon[type]}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
