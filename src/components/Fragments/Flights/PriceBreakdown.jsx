import { useState } from 'react';
import { useFlightDetails } from '../../../hooks/useFetchFlightDetails';

export const PriceBreakdown = ({ flightId, seatClass, adult, child, baby }) => {
    const {
      pricing,
      loading,
      error
    } = useFlightDetails({
      flightId,
      seatClass,
      adult,
      child,
      baby
    });
  
    if (loading) return <div>Loading price details...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pricing) return <div>No pricing information available</div>;
  
    return (
      <div className="p-4 border rounded">
        <h3 className="text-lg font-bold mb-4">Price Breakdown</h3>
        
        {adult > 0 && (
          <div className="flex justify-between mb-2">
            <p>Adult ({adult} x {pricing.subTotalPrice.adult.formatted})</p>
            <p>{pricing.subTotalPrice.adult.formatted}</p>
          </div>
        )}
        
        {child > 0 && (
          <div className="flex justify-between mb-2">
            <p>Child ({child} x {pricing.subTotalPrice.child.formatted})</p>
            <p>{pricing.subTotalPrice.child.formatted}</p>
          </div>
        )}
        
        {baby > 0 && (
          <div className="flex justify-between mb-2">
            <p>Infant ({baby} x {pricing.subTotalPrice.baby.formatted})</p>
            <p>{pricing.subTotalPrice.baby.formatted}</p>
          </div>
        )}
  
        <div className="border-t my-2"></div>
        
        <div className="flex justify-between mb-2">
          <p>Tax</p>
          <p>{pricing.tax.formatted}</p>
        </div>
        
        <div className="flex justify-between font-bold text-lg mt-4">
          <p>Total</p>
          <p>{pricing.total.formatted}</p>
        </div>
      </div>
    );
  };