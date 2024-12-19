import { useState, useCallback } from 'react';
import { ticketBookingService } from '../services/ticket.service';

export const useTicketBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookingResult, setBookingResult] = useState(null);

  const createTicketOrder = async (bookingData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await ticketBookingService.createTicketOrder(bookingData);
      setBookingResult(result);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to create booking');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetBooking = () => {
    setBookingResult(null);
    setError(null);
  };

  return {
    createTicketOrder,
    isLoading,
    error,
    bookingResult,
    resetBooking
  };
};