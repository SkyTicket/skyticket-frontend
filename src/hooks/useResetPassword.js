import toast from "react-hot-toast";
import { resetPassword as resetPasswordService } from "../services/auth.service";

const useResetPassword = (token) => {
  const resetPassword = async (newPassword) => {
    try {
      const response = await resetPasswordService(token, newPassword);
      if (response.status === "Success") {
        toast.success(response.message || "Password berhasil diubah.");
        return true;
      } else {
        toast.error(response.message || "Gagal mengubah password.");
        return false;
      }
    } catch (error) {
      console.error("Error saat reset password:", error);
      toast.error("Terjadi kesalahan dalam proses reset password.");
      return false;
    }
  };

  return { resetPassword };
};

export default useResetPassword;
