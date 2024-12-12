import Cookies from "js-cookie";
import axiosInstance from "../api/axiosInstance";

const updateUserService = {
  updateUserProfile: async (reqBody) => {
    try {
      const token = Cookies.get("token");
      const response = await axiosInstance.put(
        `/api/v1/user/update-user`,
        reqBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response) {
        throw new Error("Failed to update user profile");
      }

      const data = response.data;
      console.log("Updated data:", data);

      return data;
    } catch (error) {
      console.error("Error in updateUserProfile:", error);
      throw error;
    }
  },
};

export { updateUserService };
