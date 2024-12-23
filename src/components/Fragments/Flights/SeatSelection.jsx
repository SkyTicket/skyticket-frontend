import { useState } from 'react';
import { useFlightDetails } from '../../../hooks/useFetchFlightDetails';

export const SeatSelection = ({ flightId, seatClass, adult, child, baby }) => {
    const {
      seats,
      loading,
      error,
      getAvailableSeats,
      availableSeatsCount,
      totalPassengers
    } = useFlightDetails({
      flightId,
      seatClass,
      adult,
      child,
      baby
    });
  
    const [selectedSeats, setSelectedSeats] = useState([]);
    const availableSeats = getAvailableSeats();
  
    const handleSeatSelect = (seat) => {
      if (selectedSeats.includes(seat.seatId)) {
        setSelectedSeats(prev => prev.filter(id => id !== seat.seatId));
      } else if (selectedSeats.length < totalPassengers) {
        setSelectedSeats(prev => [...prev, seat.seatId]);
      }
    };
  
    if (loading) return <div>Loading seats...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!seats) return <div>No seat information available</div>;
  
    return (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">
          Select Seats ({selectedSeats.length}/{totalPassengers})
        </h3>
        
        <p>Available seats: {availableSeatsCount}</p>
  
        <div className="grid grid-cols-6 gap-2 mt-4">
          {seats.map(seat => (
            <button
              key={seat.seatId}
              onClick={() => handleSeatSelect(seat)}
              disabled={!seat.isAvailable || 
                (selectedSeats.length >= totalPassengers && 
                 !selectedSeats.includes(seat.seatId))}
              className={`
                p-2 rounded
                ${!seat.isAvailable ? 'bg-gray-300' : 
                  selectedSeats.includes(seat.seatId) ? 'bg-blue-500 text-white' :
                  'bg-white border border-blue-500'}
              `}
            >
              {seat.seatNumber}
            </button>
          ))}
        </div>
      </div>
    );
  };
  