import Cookies from "js-cookie";
import axiosInstance from "../api/axiosInstance";

const Login = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/login", data);

    if (response.data.token) {
      Cookies.set("token", response.data.token, { expires: 7 });
      return {
        status: "Success",
        message: response.data.message,
        token: response.data.token,
      };
    } else {
      return {
        status: "Error",
        message: response.data.message,
      };
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Terjadi kesalahan";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

const Logout = async () => {
  try {
    await axiosInstance.post("/api/v1/auth/logout");

    Cookies.remove("token");
    return {
      status: "Success",
      message: "Logout berhasil",
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Terjadi kesalahan saat logout";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

const Register = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/register", data);

    if (response.status === 201) {
      Cookies.set("userEmail", data.user_email, { expires: 7 });
    }

    return {
      status: "Success",
      message: response.data.message,
      email: data.user_email,
    };
  } catch (error) {
    const errorMessage = error.response?.data?.message;
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

const VerifyOtp = async (email, otpCode) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/verify-otp", {
      user_email: email,
      otp_code: otpCode,
    });

    return response.data;
  } catch (error) {
    console.error("Error dari VerifyOtp:", error.response?.data);
    throw error.response?.data || new Error("Gagal verifikasi OTP");
  }
};

const ResendOtp = async (email) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/resend-otp", {
      user_email: email,
    });

    return response.data;
  } catch (error) {
    console.error("Error dari ResendOtp:", error.response?.data);
    throw error.response?.data || new Error("Gagal mengirim ulang OTP");
  }
};

const resetPassword = async (data) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/auth/reset-password",
      data,
    );
    return {
      status: "Success",
      message: response.data.message,
    };
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Gagal reset password";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

const requestResetPassword = async (email) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/forget-password", {
      email,
    });
    console.log("Response sukses:", response.data);

    return {
      status: "Success",
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error Response:", error.response);

    const errorMessage = error.response?.data?.message || "Terjadi kesalahan";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

export { Login, Logout, Register, VerifyOtp, ResendOtp, resetPassword, requestResetPassword };
