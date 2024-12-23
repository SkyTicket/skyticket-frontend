import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Login as loginService } from "../services/auth.service";

const useLogin = () => {
  const { login: contextLogin } = useAuth();
  const navigate = useNavigate();

  const performLogin = async (email, password) => {
    const data = {
      email: email.trim(),
      user_password: password,
    };

    try {
      const result = await loginService(data);
      if (result.status === "Success") {
        toast.success(result.message || "Login berhasil");

        const { token, user_role } = result;
        contextLogin(token, user_role, email);
        return true;
      } else {
        if (
          result.message === "Akun belum diverifikasi. Harap verifikasi melalui OTP terlebih dahulu."
        ) {
          toast.error(result.message);
          return { success: false, requiresVerification: true, email };
        }

        toast.error(result.message || "Login gagal");
        return { success: false };
      }
    } catch (error) {
      toast.error("Terjadi kesalahan dalam proses login");
      console.error(error);
      return { success: false };
    }
  };

  return { login: performLogin };
};

export default useLogin;
