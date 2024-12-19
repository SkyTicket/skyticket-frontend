import { useState, useEffect } from "react";
import { fetchFlightsDetail } from "../services/flightsService"; // sesuaikan dengan path

export const useFlightDetails = ({ flightId, seatClass, adult = 0, child = 0, baby = 0 }) => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await fetchFlightsDetail.getFlightDetails({
          flightId,
          seatClass,
          adult: Number(adult),
          child: Number(child),
          baby: Number(baby)
        });
        
        setFlightDetails(response);
        setError(null);
      } catch (err) {
        setError({
          message: err.message || 'Failed to fetch flight details',
          status: err.status || 500,
          code: err.code || 'INTERNAL_ERROR'
        });
        setFlightDetails(null);
      } finally {
        setLoading(false);
      }
    };

    if (flightId && seatClass) {
      fetchDetails();
    } else {
      setError({
        message: 'Flight ID and Seat Class are required',
        status: 400,
        code: 'INVALID_PARAMS'
      });
      setLoading(false);
    }
  }, [flightId, seatClass, adult, child, baby]);

  return {
    flightDetails,
    loading,
    error,
    flight: flightDetails?.flight,
    pricing: flightDetails?.pricing,
    seats: flightDetails?.seats,
    passengers: flightDetails?.passengers
  };
};