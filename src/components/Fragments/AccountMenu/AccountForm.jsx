import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useUser } from "../../../hooks/useProfile";
import { updateUserService } from "../../../services/updateUser.service";

function AccountForm({ onClose }) {
  const { user, setUser, setError, setLoading } = useUser();

  const update = async () => {
    try {
      setLoading(true);
      const response = await updateUserService.updateUserProfile(user);
      setUser(response.data);
      setError(null);
      toast.success("Profile anda berhasil dirubah");
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value, setValue, key) => {
    setValue((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update();
  };
  return (
    <>
      <div className="m-auto mt-4 w-[80%] rounded border-2 border-gray-300 p-4 md:m-4 md:w-[60%]">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between py-4">
            <p className="text-xl font-bold text-black">Ubah Data Profil</p>
            <FontAwesomeIcon
              icon={faXmark}
              className="block size-6 cursor-pointer text-[#151515] md:hidden"
              onClick={onClose}
            />
          </div>
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
              value={user?.user_name || ""}
              onChange={(e) =>
                handleChange(e.target.value, setUser, "user_name")
              }
              className="mt-1 rounded-md border-2 border-gray-300 bg-white p-2 px-4 font-medium text-black focus:outline-none focus:ring-2"
              required
            />
            <label htmlFor="nomor" className="mt-2 font-bold text-[#4B1979]">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="nomor"
              title="(e.g., +6281234567890)"
              pattern="^(\+62|0)8[1-9](?:\d{7,10}|\d(?:\s\d){7,10})$"
              placeholder="Masukkan nomor telepon baru anda"
              value={user?.user_phone || ""}
              onChange={(e) =>
                handleChange(e.target.value, setUser, "user_phone")
              }
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
              value={user?.user_email || ""}
              onChange={(e) =>
                handleChange(e.target.value, setUser, "user_email")
              }
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="(e.g., johndoe@mail.com)"
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
    </>
  );
}
export default AccountForm;
