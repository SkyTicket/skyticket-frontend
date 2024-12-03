import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function HeaderLogin({ title, buttonText, useFilter }) {
  return (
    <div className="my-5 w-full bg-white py-4 pt-0 shadow-lg">
      <div className="mx-auto w-3/4">
        <p className="py-6 text-2xl font-semibold text-black">{title}</p>
        <Link
          to="/"
          className="flex w-full items-center gap-2 rounded-xl bg-[#A06ECE] px-4 py-3 text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
          <p className="text-white">{buttonText}</p>
        </Link>
      </div>
    </div>
  );
}

export default HeaderLogin;
