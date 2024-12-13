import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Register as registerService } from "../services/auth.service";
import { useAuth } from "../contexts/AuthContext";

const useRegister = () => {
  const { login: contextLogin } = useAuth();
  const navigate = useNavigate();

  const performRegister = async (name, email, phone, password) => {
    const data = {
      user_name: name,
      email: email.trim(),
      user_phone: phone,
      user_password: password,
    };

    try {
      const result = await registerService(data);

      if (result.status === "Success") {
        if (result.token) {
          contextLogin(result.token);
        }

        navigate("/otp", {
          state: {
            email: email,
          },
        });

        toast.success(result.message || "Registrasi berhasil");
        return true;
      } else {
        toast.error(result.message || "Registrasi gagal");
        return false;
      }
    } catch (error) {
      toast.error("Terjadi kesalahan dalam proses registrasi");
      console.error(error);
      return false;
    }
  };

  return { register: performRegister };
};

export default useRegister;
