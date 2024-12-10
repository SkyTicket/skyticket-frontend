import toast from "react-hot-toast";
import { Logout as logoutService } from "../services/auth.service";
import { useAuth } from "../contexts/AuthContext";

const useLogout = () => {
  const { logout: contextLogout } = useAuth();

  const performLogout = async () => {
    try {
      const result = await logoutService();
      if (result.status === "Success") {
        toast.success(result.message || "Logout berhasil");
        contextLogout();
      } else {
        toast.error(result.message || "Logout gagal");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat logout");
      console.error(error);
    }
  };

  return { logout: performLogout };
};

export default useLogout;
