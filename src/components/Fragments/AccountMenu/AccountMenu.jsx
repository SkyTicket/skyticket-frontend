import { useNavigate } from "react-router-dom";
import useLogout from "../../../hooks/useLogout";

function AccountMenu({ onClick }) {
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="mx-auto flex w-[90%] flex-col items-center gap-2 bg-white p-4 md:m-4 md:w-[40%]">
      <div className="flex w-full flex-col gap-2">
        <div
          className="flex cursor-pointer items-center gap-5 border-b border-gray-300 pb-3"
          onClick={onClick}
        >
          <img
            alt="Edit Icon"
            src="/assets/icons/edit.svg"
            className="h-6 w-6"
          />
          <div className="select-none text-base font-medium text-black">
            Ubah Profil
          </div>
        </div>

        <div className="flex cursor-pointer items-center gap-5 border-b border-gray-300 pb-3">
          <img
            alt="Setting Icon"
            src="/assets/icons/setting.svg"
            className="h-6 w-6"
          />
          <p className="select-none text-base font-medium text-black">
            Pengaturan Akun
          </p>
        </div>

        <div
          className="flex cursor-pointer items-center gap-5 border-b border-gray-300 pb-3"
          onClick={handleLogout}
        >
          <img
            alt="Logout Icon"
            src="/assets/icons/logout.svg"
            className="h-6 w-6"
          />
          <p className="select-none text-base font-medium text-black">Keluar</p>
        </div>
      </div>

      <p className="cursor-default select-none pt-4 text-xs text-[#8A8A8A]">
        version 1.1.0
      </p>
    </div>
  );
}

export default AccountMenu;
