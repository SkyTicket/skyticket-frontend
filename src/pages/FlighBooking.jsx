import { useState } from 'react';
import { FlightSearch } from '../components/Fragments/Flights/FlightSearch';
import { FlightSummary } from '../components/Fragments/Flights/FlightSummary';
import { PriceBreakdown } from '../components/Fragments/Flights/PriceBreakdown';
import { SeatSelection } from '../components/Fragments/Flights/SeatSelection';

const FlightBooking = () => {
    const [bookingData, setBookingData] = useState(null);
  
    const handleFlightSelected = (data) => {
      setBookingData(data);
    };
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Flight Booking</h1>
        
        {/* Step 1: Search */}
        <FlightSearch onFlightSelect={handleFlightSelected} />
        
        {bookingData && (
          <>
            {/* Step 2: Flight Summary */}
            <FlightSummary
              flightId={bookingData.flightId}
              seatClass={bookingData.seatClass}
              adult={bookingData.adult}
              child={bookingData.child}
              baby={bookingData.baby}
            />
            
            {/* Step 3: Seat Selection */}
            <SeatSelection
              flightId={bookingData.flightId}
              seatClass={bookingData.seatClass}
              adult={bookingData.adult}
              child={bookingData.child}
              baby={bookingData.baby}
            />
            
            {/* Step 4: Price Breakdown */}
            <PriceBreakdown
              flightId={bookingData.flightId}
              seatClass={bookingData.seatClass}
              adult={bookingData.adult}
              child={bookingData.child}
              baby={bookingData.baby}
            />
          </>
        )}
      </div>
    );
  };

  export default FlightBooking