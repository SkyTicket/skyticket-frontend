import { useState } from 'react';
import { useFlightDetails } from '../../../hooks/useFetchFlightDetails';

export const FlightSummary = ({ flightId, seatClass, adult, child, baby }) => {
    const {
      flightDetails,
      pricing,
      loading,
      error,
      getFlightDuration
    } = useFlightDetails({
      flightId,
      seatClass,
      adult,
      child,
      baby
    });
  
    if (loading) return <div>Loading flight summary...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!flightDetails) return <div>No flight details available</div>;
  
    const { hours, minutes } = getFlightDuration();
  
    return (
      <div className="p-4 border rounded">
        <div className="flex justify-between">
          <div>
            <img 
              src={flightDetails.airline.logo} 
              alt={flightDetails.airline.name} 
              className="h-8"
            />
            <h3>{flightDetails.airline.name}</h3>
            <p>{flightDetails.airline.flightNumber}</p>
          </div>
          
          <div className="text-right">
            <p className="font-bold">{pricing.total.formatted}</p>
            <p>{flightDetails.seatClass.type}</p>
          </div>
        </div>
  
        <div className="flex justify-between mt-4">
          <div>
            <p className="font-bold">{flightDetails.departure.time}</p>
            <p>{flightDetails.departure.city}</p>
            <p className="text-sm">{flightDetails.departure.airport}</p>
          </div>
  
          <div className="text-center">
            <p className="text-sm">{hours}h {minutes}m</p>
            <div className="border-t my-2"></div>
          </div>
  
          <div className="text-right">
            <p className="font-bold">{flightDetails.arrival.time}</p>
            <p>{flightDetails.arrival.city}</p>
            <p className="text-sm">{flightDetails.arrival.airport}</p>
          </div>
        </div>
      </div>
    );
  };