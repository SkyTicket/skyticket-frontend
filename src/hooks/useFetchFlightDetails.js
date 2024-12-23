import { useState, useEffect } from "react"; 
import { getFlightDetails } from "../services/flights.service";

export const useFlightDetails = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchFlightDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getFlightDetails(query);
        setData(result);
        console.log(result.data)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlightDetails();
  }, [query]);

  // console.log(query)

  return { data, loading, error };
};