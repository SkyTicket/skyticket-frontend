import axiosInstance from "../api/axiosInstance";

const FavoriteDestination = async (page, continent) => {
  try {
    const response = await axiosInstance.get("/api/v1/favorite-destination", {
      params: { page, continent },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching favorite destinations:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Gagal memuat destinasi",
    };
  }
};

export { FavoriteDestination };
