import axiosInstance from "../api/axiosInstance";

export const fetchClassPrice = async (data) => {
  try {
    const response = await axiosInstance.get("api/v1/seat-classes-price", {
      params: {
        departure_airport: data.depCity.input_value,
        arrival_airport: data.arrCity.input_value,
        flight_departure_date: data.depDate,
        returning_flight_departure_date: data.arrDate,
      },
    });
    return response.data.seats_data;
  } catch (error) {
    const customError = new Error(error.response?.data?.messages);
    customError.response = error.response.data;
    throw customError;
  }
};
