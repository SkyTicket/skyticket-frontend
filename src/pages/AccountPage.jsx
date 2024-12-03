import NavbarLogin from "../components/Fragments/Navbar/NavbarLogin";
import HeaderLogin from "../components/Fragments/Header/Header";
import AccountMenu from "../components/Fragments/AccountMenu/AccountMenu";

function AccountPage() {
  return (
    <>
      <NavbarLogin isActive="user" />
      <HeaderLogin title="Akun" buttonText="Beranda" />
      <div className="mx-auto flex w-3/4 justify-between gap-4">
        <AccountMenu />
        <div className="m-4 w-[60%] rounded border-2 border-gray-300 p-4">
          <form action="" className="flex flex-col">
            <p className="py-3 text-2xl font-semibold text-black">
              Ubah Data Profil
            </p>
            <p className="w-full rounded-t-xl bg-[#A06ECE] p-2 pl-4 text-white">
              Data Diri
            </p>
            <div className="flex flex-col p-3">
              <label htmlFor="nama" className="font-bold text-purple-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                placeholder="John Doe"
                className="mt-1 rounded-md border-2 border-gray-300 bg-white p-2 px-4 text-black"
                required
              />
              <label htmlFor="nomor" className="mt-2 font-bold text-purple-700">
                Nomor Telepon
              </label>
              <input
                type="tel"
                name="nomor"
                title="081234567890"
                pattern="^08[0-9]{9,11}$"
                placeholder="Masukkan nomor telepon baru anda"
                className="mt-1 rounded-md border-2 border-gray-300 bg-white p-2 px-4 text-black"
                required
              />
              <label htmlFor="email" className="mt-2 font-bold text-purple-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan email baru anda"
                className="mt-1 rounded-md border-2 border-gray-300 bg-white p-2 px-4 text-black"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="my-2 w-36 bg-purple-800 text-white"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
