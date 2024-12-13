import axiosInstance from "../api/axiosInstance";

export const fetchAirports = async (searchQuery) => {
  try {
    const response = await axiosInstance.get("api/v1/airports", {
      params: { airport: searchQuery },
    });
    return response.data.airports;
  } catch (error) {
    const customError = new Error(error.response?.data?.messages);
    customError.response = error.response.data;
    throw customError;
  }
};
