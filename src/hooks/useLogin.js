import toast from "react-hot-toast";
import { Login as loginService } from "../services/auth.service";
import { useAuth } from "../contexts/AuthContext"

const useLogin = () => {
  const { login: contextLogin } = useAuth();

  const performLogin = async (email, password) => {
    const data = {
      email: email.trim(),
      user_password: password,
    };

    try {
      const result = await loginService(data);
      if (result.status === "Success") {
        toast.success(result.message || "Login berhasil");
        contextLogin(result.token);
        return true;
      } else {
        toast.error(result.message || "Login gagal");
        return false;
      }
    } catch (error) {
      toast.error("Terjadi kesalahan dalam proses login");
      console.error(error);
      return false;
    }
  };

  return { login: performLogin };
};

export default useLogin;
