import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function HeaderLogin({
  title,
  buttonText,
  useFilter,
  rightButtonIcon,
  rightButtonText,
  rightButtonAction,
  searchButtonIcon,
  searchButtonAction,
}) {
  return (
    <div className="my-5 flex w-full items-center bg-white px-4 py-4 pt-0 shadow-lg">
      <div className="mx-auto w-3/4">
        <p className="py-6 text-2xl font-semibold text-black">{title}</p>
        <div className="flex gap-6">
          <Link
            to="/"
            className="flex w-full items-center gap-2 rounded-xl bg-[#A06ECE] px-4 py-3 text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
            <p className="text-white">{buttonText}</p>
          </Link>
          {rightButtonIcon && (
            <button
              onClick={rightButtonAction}
              className="flex items-center gap-1 rounded-full border border-[#A06ECE] px-6 py-0 text-[#A06ECE]"
            >
              <FontAwesomeIcon icon={rightButtonIcon} />
              {rightButtonText && <span>{rightButtonText}</span>}
            </button>
          )}
          {searchButtonIcon && (
            <button
              onClick={searchButtonAction}
              className="flex items-center px-0 justify-center rounded-full border-none bg-transparent p-1 text-[#A06ECE] hover:border-none hover:outline-none focus:outline-none focus:ring-0"
              style={{
                outline: "none",
                border: "none",
              }}
            >
              <FontAwesomeIcon icon={searchButtonIcon} className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderLogin;
