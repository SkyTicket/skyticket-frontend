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
      setDestinations([]);

      try {
        const response = await FavoriteDestination(page, continent);
        if (response.success) {
          setDestinations(response.data || []);
          setTotalPages(response.totalPages || 1);
        } else {
          setError(response.error || "Gagal mengambil data.");
        }
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat memuat data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [page, continent]);

  return { destinations, loading, error, totalPages };
};

export default useFavoriteDestination;
