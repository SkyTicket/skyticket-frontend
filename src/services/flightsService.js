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
        sort_by: filters.sortBy,
        page: filters.page,
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

export const fetchFlightsDetail = { 
  async getFlightDetails({ flightId, seatClass, adult = 0, child = 0, baby = 0 }) {
  try {
    // Input validation
    if (!flightId || !seatClass || isNaN(adult) || isNaN(child) || isNaN(baby)) {
      throw new Error('Parameter yang diberikan tidak valid.');
    }

    const response = await axiosInstance.get(`/api/v1/flights/detail`, {
      params: {
        flightId,
        seatClass,
        adult,
        child,
        baby
      }
    });

    const { data } = response.data;

    // Format the price data for display
    const formattedPriceData = {
      subTotalPrice: {
        adult: {
          raw: data.subTotalPrice.adult,
          formatted: formatCurrency(data.subTotalPrice.adult)
        },
        child: {
          raw: data.subTotalPrice.child,
          formatted: formatCurrency(data.subTotalPrice.child)
        },
        baby: {
          raw: data.subTotalPrice.baby,
          formatted: formatCurrency(data.subTotalPrice.baby)
        }
      },
      tax: {
        raw: data.tax,
        formatted: formatCurrency(data.tax)
      },
      total: {
        raw: data.total,
        formatted: formatCurrency(data.total)
      }
    };

    // Format seat assignments data
    const formattedSeatAssignments = data.seatAssignments.map(seat => ({
      seatId: seat.seat.seat_id,
      seatNumber: seat.seat.seat_number,
      isAvailable: !seat.passenger_id,
      assignmentId: seat.flight_seat_assignment_id
    }));

    // Combine and return formatted data
    return {
      flight: {
        ...data.formattedFlightData[0],
        departure: {
          city: data.formattedFlightData[0].departure_airport_city,
          airport: data.formattedFlightData[0].departure_airport_name,
          time: data.formattedFlightData[0].departure_time,
          date: data.formattedFlightData[0].departure_date
        },
        arrival: {
          city: data.formattedFlightData[0].arrival_airport_city,
          airport: data.formattedFlightData[0].arrival_airport_name,
          time: data.formattedFlightData[0].arrival_time,
          date: data.formattedFlightData[0].arrival_date
        },
        airline: {
          name: data.formattedFlightData[0].airline_name_and_class,
          flightNumber: data.formattedFlightData[0].flight_number,
          logo: data.formattedFlightData[0].airline_logo
        },
        seatClass: {
          type: data.formattedFlightData[0].seat_class_type,
          price: {
            raw: data.formattedFlightData[0].seat_class_price.raw,
            formatted: data.formattedFlightData[0].seat_class_price.formatted
          }
        },
        amenities: data.formattedFlightData[0].Informasi
      },
      pricing: formattedPriceData,
      seats: formattedSeatAssignments,
      passengers: {
        adult,
        child,
        baby
      }
    };
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      throw {
        status,
        message: data.message || 'Failed to fetch flight details',
        code: data.statusCode
      };
    }
    throw {
      status: 500,
      message: error.message || 'An unexpected error occurred',
      code: 'INTERNAL_ERROR'
    };
  }
}
}
