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
            className="flex w-full items-center gap-4 rounded-xl bg-[#A06ECE] px-4 py-3 mx-4 my-2 text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
            <p className="text-white">{buttonText}</p>
          </Link>
          {rightButtonIcon && (
            <button
              onClick={rightButtonAction}
              className="flex items-center gap-3 rounded-full border border-[#7533b2] bg-transparent px-6 py-0 text-[#A06ECE] hover:bg-[#f6edff] dark:border"
            >
              <FontAwesomeIcon icon={rightButtonIcon} />
              {rightButtonText && <span>{rightButtonText}</span>}
            </button>
          )}
          {searchButtonIcon && (
            <button
              onClick={searchButtonAction}
              className="flex items-center justify-center rounded-full border-none bg-transparent p-1 px-0 text-[#A06ECE] hover:border-none hover:outline-none focus:outline-none focus:ring-0"
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
