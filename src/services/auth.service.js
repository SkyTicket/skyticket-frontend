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

export { Login, Logout };
