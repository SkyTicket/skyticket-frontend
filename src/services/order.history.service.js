import Cookies from "js-cookie";
import axiosInstance from "../api/axiosInstance";

export const fetchOrderHistory = async () => {
  try {
    const token = Cookies.get("token");
    const response = await axiosInstance.get(`/api/v1/transaksi/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response) {
      throw new Error("Failed to fetch order history");
    }

    return response.data.transactions_data;
  } catch (error) {
    if (error.response?.status === 404) {
      return { status: 404 };
    }
    const customError = new Error(error.response?.data?.messages);
    customError.response = error.response.data;
    throw customError;
  }
};
