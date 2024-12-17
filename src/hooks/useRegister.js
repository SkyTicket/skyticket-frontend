import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Register as registerService } from "../services/auth.service";

const useRegister = () => {
  const navigate = useNavigate();

  const performRegister = async (name, email, phone, password) => {
    const data = {
      user_name: name,
      user_email: email.trim(),
      user_phone: phone,
      user_password: password,
    };

    try {
      const result = await registerService(data);

      if (result.status === "Success") {
        toast.success(result.message);
        navigate("/otp", { state: { email } });
        return true;
      } else {
        toast.error(result.message || "Registrasi gagal");
        return false;
      }
    } catch (error) {
      toast.error("Gagal mengirim email OTP. Silakan coba lagi.");
      console.error(error);
      return false;
    }
  };

  return { register: performRegister };
};

export default useRegister;
