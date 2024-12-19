import { useState } from "react";
import toast from "react-hot-toast";
import { requestResetPassword as requestResetPasswordService } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const useRequestResetPassword = () => {
  const navigate = useNavigate();

  const requestResetPassword = async (email) => {
    try {
      const response = await requestResetPasswordService(email.trim());
      if (response.status === "Success") {
        toast.success(response.message || "Email berhasil dikirim.");
        navigate("/otp", { state: { email } });
      } else {
        toast.error(response.message || "Gagal mengirim email reset password.");
      }
    } catch (error) {
      console.error("Error saat request reset password:", error);
      toast.error("Terjadi kesalahan dalam proses reset password.");
    }
  };

  return { requestResetPassword };
};

export default useRequestResetPassword;