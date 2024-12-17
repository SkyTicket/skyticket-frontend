import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function FooterMobile({ active }) {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-0 flex w-full items-center justify-around py-2 shadow-lg shadow-black">
      <div
        className={`flex cursor-pointer select-none flex-col items-center text-[${active == "beranda" ? "#4B1979" : "#8A8A8A"}]`}
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faHouse} className="size-6" />
        <p className="text-xs">Beranda</p>
      </div>
      <div
        className={`flex cursor-pointer select-none flex-col items-center text-[${active == "riwayat" ? "#4B1979" : "#8A8A8A"}]`}
        onClick={() => navigate("/history")}
      >
        <FontAwesomeIcon icon={faHouse} className="size-6" />
        <p className="text-xs">Riwayat</p>
      </div>
      <div
        className={`flex cursor-pointer select-none flex-col items-center text-[${active == "notifikasi" ? "#4B1979" : "#8A8A8A"}]`}
        onClick={() => navigate("/notification")}
      >
        <FontAwesomeIcon icon={faBell} className="size-6" />
        <p className="text-xs">Notifikasi</p>
      </div>
      <div
        className={`flex cursor-pointer select-none flex-col items-center text-[${active == "akun" ? "#4B1979" : "#8A8A8A"}] `}
        onClick={() => navigate("/account")}
      >
        <FontAwesomeIcon icon={faCircleUser} className="size-6" />
        <p className="text-xs">Akun</p>
      </div>
    </div>
  );
}
export default FooterMobile;
