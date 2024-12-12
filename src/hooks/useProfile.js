import { useState, useEffect } from "react";
import { userService } from "../services/user.service";

export const useUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await userService.getUserProfile();
      setUser(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const refreshUser = () => {
    fetchUser();
  };

  return {
    user,
    loading,
    error,
    setUser,
    setError,
    setLoading,
    refreshUser,
  };
};
