import { useState, useEffect } from "react";
import { FavoriteDestination } from "../services/favorite.destination.service";

const useFavoriteDestination = (page, continent) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true);
      setError(null);
      const response = await FavoriteDestination(page, continent);
      if (response.data.success) {
        setDestinations(response.data.data);
        setTotalPages(response.data.totalPages);
      } else {
        setError(response.error);
      }
      setLoading(false);
    };
    fetchDestinations();
  }, [page, continent]);

  return { destinations, loading, error, totalPages };
};

export default useFavoriteDestination;
