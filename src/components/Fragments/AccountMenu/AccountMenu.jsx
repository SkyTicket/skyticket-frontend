function AccountMenu() {
  return (
    <div className="flex w-[40%] flex-col items-center gap-2 bg-white p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-5 border-b border-gray-300 pb-3">
          <img alt="Edit Icon" src="/src/assets/icons/edit.svg" />
          <p className="text-black">Ubah Profil</p>
        </div>
        <div className="flex items-center gap-5 border-b border-gray-300 pb-3">
          <img alt="Setting Icon" src="/src/assets/icons/setting.svg" />
          <p className="text-black">Pengaturan Akun</p>
        </div>
        <div className="flex items-center gap-5 border-b border-gray-300 pb-3">
          <img alt="Logout Icon" src="/src/assets/icons/logout.svg" />
          <p className="text-black">Keluar</p>
        </div>
      </div>
      <p className="text-gray-500">version 1.1.0</p>
    </div>
  );
}
export default AccountMenu;
