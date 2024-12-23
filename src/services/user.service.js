import Cookies from "js-cookie";
import axiosInstance from "../api/axiosInstance";

const userService = {
  getUserProfile: async (data) => {
    try {
      const token = Cookies.get("token");
      const response = await axiosInstance.get(`/api/v1/user/get-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response) {
        throw new Error("Failed to fetch user profile");
      }

      const data = response.data;
      console.log("Fetched data:", data);

      return data;
    } catch (error) {
      console.error("Error in getUserProfile:", error);
      throw error;
    }
  },
};

export { userService };
