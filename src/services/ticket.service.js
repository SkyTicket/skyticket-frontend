import axiosInstance from "../api/axiosInstance";

export const ticketBookingService = {
  createTicketOrder: async (bookingData) => {
    try {
      const response = await axiosInstance.post('/api/v1/ticket-order', bookingData);
      return response.data;
    } catch (error) {
      // If the error has a response from the server
      if (error.response) {
        throw new Error(error.response.data.message || 'Something went wrong');
      }
      // If the error is in making the request
      if (error.request) {
        throw new Error('Network error - no response received');
      }
      // Something else went wrong
      throw new Error(error.message || 'Failed to create ticket order');
    }
  },

  validateOrderData: (bookingData) => {
    const { seats, passengers, userId, bookerName, bookerEmail, bookerPhone } = bookingData;

    if (!seats?.length || !passengers?.length) {
      throw new Error('Seats and passengers data are required');
    }

    if (seats.length !== passengers.length) {
      throw new Error('Number of seats must match number of passengers');
    }

    if (!userId || !bookerName || !bookerEmail || !bookerPhone) {
      throw new Error('Booker information is incomplete');
    }

    return true;
  }
};

