import HeaderLogin from "../components/Fragments/Header/Header";
import AccountMenu from "../components/Fragments/AccountMenu/AccountMenu";
import Navbar from "../components/Fragments/Navbar/Navbar";
import { useUser } from "../hooks/useProfile";
import { AuthProvider } from "../contexts/AuthContext";

function AccountPage() {
  const { user, loading, error, refreshUser } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <>
      <AuthProvider>
        <Navbar />
        <HeaderLogin title="Akun" buttonText="Beranda" />
        <div className="mx-auto flex w-3/4 justify-between gap-4">
          <AccountMenu />
          <div className="m-4 w-[60%] rounded border-2 border-gray-300 p-4">
            <form action="" className="flex flex-col">
              <p className="py-4 text-xl font-bold text-black">
                Ubah Data Profil
              </p>
              <p className="w-full rounded-t-xl bg-[#A06ECE] p-2 pl-4 text-base font-medium text-white">
                Data Diri
              </p>
              <div className="flex flex-col p-3">
                <label htmlFor="nama" className="font-bold text-[#4B1979]">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="John Doe"
                  value={user.user_name}
                  className="mt-1 rounded-md border-2 border-gray-300 bg-white p-2 px-4 font-medium text-black focus:outline-none focus:ring-2"
                  required
                />
                <label htmlFor="nomor" className="mt-2 font-bold text-[#4B1979]">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="nomor"
                  title="081234567890"
                  pattern="^08[0-9]{9,11}$"
                  placeholder="Masukkan nomor telepon baru anda"
                  value={user.user_phone}
                  className="mt-1 rounded-md border-2 border-gray-300 bg-white p-2 px-4 font-medium text-black focus:outline-none focus:ring-2"
                  required
                />
                <label htmlFor="email" className="mt-2 font-bold text-[#4B1979]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan email baru anda"
                  value={user.user_email}
                  className="mt-1 rounded-md border-2 border-gray-300 bg-white p-2 px-4 font-medium text-black focus:outline-none focus:ring-2"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="my-2 w-36 bg-[#4B1979] text-white hover:bg-purple-800"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthProvider>
    </>
  );
}

export default AccountPage;
