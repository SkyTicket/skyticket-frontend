import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VerifyOtp, ResendOtp } from "../services/auth.service";

export const useOtp = (email, onSuccess) => {
  const [otpCode, setOtpCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOtpChange = (e) => setOtpCode(e.target.value);

  const handleVerifyOtp = async (otpCode) => {
    setIsLoading(true);
    try {
      const response = await VerifyOtp(email, otpCode);
      toast.success(response.message);

      Cookies.remove("userEmail");

      if (onSuccess) {
        toast.success("Verifikasi berhasil! Mengarahkan ke halaman login...");
        setTimeout(() => {
          onSuccess();
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      toast.error(error.message || "Gagal memverifikasi kode OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    const storedEmail = Cookies.get("userEmail") || email;

    setIsLoading(true);
    try {
      const response = await ResendOtp(storedEmail);
      toast.success(response.message || "Kode OTP telah dikirim ulang.");
    } catch (error) {
      toast.error(error.message || "Gagal mengirim ulang kode OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    otpCode,
    isLoading,
    handleOtpChange,
    handleVerifyOtp,
    handleResendOtp,
  };
};
