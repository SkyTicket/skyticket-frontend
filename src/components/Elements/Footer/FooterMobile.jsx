import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faHistory,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

function FooterMobile({ active }) {
  return (
    <div className="z-200 fixed bottom-0 flex w-full items-center justify-around bg-white py-2 shadow-lg shadow-black">
      <Link
        to="/"
        className={`flex flex-col items-center text-[${active == "beranda" ? "#4B1979" : "#8A8A8A"}]`}
      >
        <FontAwesomeIcon icon={faHouse} className="size-6" />
        <p className="text-xs">Beranda</p>
      </Link>
      <Link
        to="/history"
        className={`flex flex-col items-center text-[${active == "riwayat" ? "#4B1979" : "#8A8A8A"}]`}
      >
        <FontAwesomeIcon icon={faHistory} className="size-6" />
        <p className="text-xs">Riwayat</p>
      </Link>
      <Link
        to="/notification"
        className={`flex flex-col items-center text-[${active == "notifikasi" ? "#4B1979" : "#8A8A8A"}]`}
      >
        <FontAwesomeIcon icon={faBell} className="size-6" />
        <p className="text-xs">Notifikasi</p>
      </Link>
      <Link
        to="/account"
        className={`flex flex-col items-center text-[${active == "akun" ? "#4B1979" : "#8A8A8A"}]`}
      >
        <FontAwesomeIcon icon={faCircleUser} className="size-6" />
        <p className="text-xs">Akun</p>
      </Link>
    </div>
  );
}
export default FooterMobile;
