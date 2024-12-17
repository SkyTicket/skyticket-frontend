import axios from "axios";
import axiosInstance from "../api/axiosInstance";

export const fetchFlights = async (filters) => {
  try {
    const response = await axiosInstance.get("api/v1/flights", {
      params: {
        departure_airport: filters.depCity.input_value,
        arrival_airport: filters.arrCity.input_value,
        flight_departure_date: filters.depDate,
        returning_flight_departure_date: filters.arrDate,
        is_round_trip: filters.isArrival,
        total_adult_passengers: filters.totalPassengers[0],
        total_child_passengers: filters.totalPassengers[1],
        total_infant_passengers: filters.totalPassengers[2],
        seat_class_type: filters.seatClass,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return { status: 404 };
    }
    const customError = new Error(error.response?.data?.messages);
    customError.response = error.response.data;
    throw customError;
  }
};
