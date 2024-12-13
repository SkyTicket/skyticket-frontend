import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { verifyOtp, resendOtp } from "../services/auth.service";

const useOtp = (email) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1);
      setOtp(newOtp);
    }
  };

  const verifyOtpCode = async () => {
    try {
      const response = await verifyOtp(otp.join(""));
      if (response.status === "Success") {
        toast.success(response.message || "OTP berhasil diverifikasi.");
        return true;
      } else {
        toast.error(response.message || "OTP tidak valid.");
        return false;
      }
    } catch (error) {
      console.error("Error saat verifikasi OTP:", error);
      toast.error("Terjadi kesalahan dalam proses verifikasi OTP.");
      return false;
    }
  };

  const resendOtpCode = async () => {
    try {
      const response = await resendOtp(email);
      toast.success(response.message || "Kode OTP berhasil dikirim ulang.");
      setTimer(60);
    } catch (error) {
      console.error("Error saat mengirim ulang OTP:", error);
      toast.error("Gagal mengirim ulang kode OTP.");
    }
  };

  return { otp, timer, handleOtpChange, verifyOtpCode, resendOtpCode };
};

export default useOtp;