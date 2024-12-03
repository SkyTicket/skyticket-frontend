import IconEdit from "./Editicon";
import GearIcon from "./GearIcon";
import OutIcon from "./OutIcon";

function AccountMenu() {
  return (
    <div className="flex w-[40%] flex-col items-center gap-2 bg-white p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-5 border-b border-gray-300 pb-3">
          <IconEdit />
          <p className="text-black">Ubah Profil</p>
        </div>
        <div className="flex items-center gap-5 border-b border-gray-300 pb-3">
          <GearIcon />
          <p className="text-black">Pengaturan Akun</p>
        </div>
        <div className="flex items-center gap-5 border-b border-gray-300 pb-3">
          <OutIcon />
          <p className="text-black">Keluar</p>
        </div>
      </div>
      <p className="text-gray-500">version 1.1.0</p>
    </div>
  );
}
export default AccountMenu;
