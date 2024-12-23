import axiosInstance from "../api/axiosInstance";

const FavoriteDestination = async (page, continent) => {
  try {
    const response = await axiosInstance.get("/api/v1/favorite-destination", {
      params: { page, continent },
    });

    return {
      success: true,
      data: response.data.data,
      totalPages: response.data.totalPages || 1,
    };
  } catch (error) {
    console.error("Error fetching favorite destinations:", error);

    const errorMessage =
      error.response?.data?.message || "Gagal memuat destinasi.";
    return {
      success: false,
      error: errorMessage,
    };
  }
};

export { FavoriteDestination };
