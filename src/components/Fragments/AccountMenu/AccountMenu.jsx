import { useNavigate } from "react-router-dom";
import useLogout from "../../../hooks/useLogout";

function AccountMenu() {
  const { logout } = useLogout();
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/")
  };

  return (
    <div className="m-4 flex w-[40%] flex-col items-center gap-2 bg-white p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex cursor-pointer items-center gap-5 border-b active:bg-gray-500 border-gray-300 pb-3">
          <img
            alt="Edit Icon"
            src="/src/assets/icons/edit.svg"
            className="h-6 w-6"
          />
          <div className="text-base font-medium text-black">Ubah Profil</div>
        </div>

        <div className="flex cursor-pointer items-center gap-5 border-b border-gray-300 pb-3">
          <img
            alt="Setting Icon"
            src="/src/assets/icons/setting.svg"
            className="h-6 w-6"
          />
          <p className="text-base font-medium text-black">Pengaturan Akun</p>
        </div>

        <div
          className="flex cursor-pointer items-center gap-5 border-b border-gray-300 pb-3"
          onClick={handleLogout} 
        >
          <img
            alt="Logout Icon"
            src="/src/assets/icons/logout.svg"
            className="h-6 w-6"
          />
          <p className="text-base font-medium text-black">Keluar</p>
        </div>
      </div>

      <p className="pt-4 text-xs text-[#8A8A8A]">version 1.1.0</p>
    </div>
  );
}

export default AccountMenu;
