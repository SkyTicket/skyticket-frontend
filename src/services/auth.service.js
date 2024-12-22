import Cookies from "js-cookie";
import axiosInstance from "../api/axiosInstance";

const ADMIN_EMAIL = "admin@skyticket.com";

const Login = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/login", data);

    if (response.data.token) {
      const user_role = data.email === ADMIN_EMAIL ? "admin" : "buyer";
      Cookies.set("token", response.data.token, { expires: 7 });
      Cookies.set("user_role", user_role, { expires: 7 });

      return {
        status: "Success",
        message: response.data.message,
        token: response.data.token,
        user_role: user_role,

      };
    } else {
      return {
        status: "Error",
        message: response.data.message,
      };
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Terjadi kesalahan.";
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
    Cookies.remove("user_role");

    return {
      status: "Success",
      message: "Logout berhasil.",
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Terjadi kesalahan saat logout.";
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
    const errorResponse = error.response;
    if (errorResponse?.status === 400 && errorResponse.data?.errors) {
      return {
        status: "Error",
        errors: errorResponse.data.errors,
      };
    }
    return {
      status: "Error",
      message: errorResponse?.data?.message || "Terjadi kesalahan pada server.",
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
    throw error.response?.data || new Error("Gagal verifikasi OTP.");
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
    throw error.response?.data || new Error("Gagal mengirim ulang OTP.");
  }
};

const resetPassword = async (token, { password, confirmPassword }) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/reset-password", {
      token,
      password,
      confirmPassword,
    });
    return {
      status: "Success",
      message: response.data.message,
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Gagal reset password.";
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

    const errorMessage = error.response?.data?.message || "Terjadi kesalahan.";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};

export {
  Login,
  Logout,
  Register,
  VerifyOtp,
  ResendOtp,
  resetPassword,
  requestResetPassword,
};
