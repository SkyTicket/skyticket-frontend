import { useState, useEffect } from 'react';
import { fetchFlightsDetail } from '../services/flightsService';

export const useFlightDetails = ({ flightId, seatClass, adult = 0, child = 0, baby = 0 }) => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFlightDetails = async () => {
    if (!flightId || !seatClass) {
      setError('Flight ID and seat class are required');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetchFlightsDetail.getFlightDetails({
        flightId,
        seatClass,
        adult,
        child,
        baby
      });

      setFlightDetails(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlightDetails();
  }, [flightId, seatClass, adult, child, baby]);

  return {
    flightDetails,
    loading,
    error,
    refetch: fetchFlightDetails
  };
};