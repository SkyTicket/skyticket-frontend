import React, { useState } from "react";
import { useFlightDetails } from "../../hooks/useFetchFlightDetails";
import { useSearchParams } from "react-router-dom";


const DetailOrderFlight = ( ) => {
  const [search] = useSearchParams()
  const FlightId = search.get('flightId')
  const SeatClass = search.get('seatClass')
  const Adult = search.get('adult')
  const Child = search.get('child')
  const Baby = search.get('baby')

  const [query, setQuery] = useState({
    flightId: FlightId,
    seatClass: SeatClass,
    adult: Adult,
    child: Child,
    baby: Baby,
  });

  const { data, loading, error } = useFlightDetails(query);

  return (
    <div>
    {data && (
      <div className="space-y-4">
      <div className="m-0 flex justify-between">
      <span className="font-bold text-[#151515]">{data.data.formattedFlightData[0]?.departure_time}</span>
      
          <span className="font-bold text-[#A06ECE]">Keberangkatan</span>
        </div>
        <div className="flex justify-between">
          <div className="text-[#151515]">
            <p>{data.data.formattedFlightData[0]?.departure_date}</p>
            <p className="font-medium">{data.data.formattedFlightData[0]?.departure_airport_name}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between text-[#151515]">
            <div>
              <p className="font-bold">{data.data.formattedFlightData[0]?.airline_name_and_class}</p>
              <p className="font-bold">{data.data.formattedFlightData[0]?.flight_number}</p>
            </div>
          </div>
        </div>

        <div className="border-b py-4">
          <p className="mb-2 font-bold text-[#151515]">Informasi:</p>
          <ul className="space-y-1 text-[#151515]">
            {data.data.formattedFlightData[0]?.Informasi.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-[#151515]">{data.data.formattedFlightData[0]?.arrival_time}</span>
          <span className="font-bold text-[#A06ECE]">Kedatangan</span>
        </div>
        <div className="flex justify-between text-[#151515]">
          <div>
            <p>{data.data.formattedFlightData[0]?.arrival_date}</p>
            <p className="font-medium">{data.data.formattedFlightData[0]?.arrival_airport_name}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="space-y-2 text-sm text-[#151515]">
            <p className="font-bold">Rincian Harga</p>
            <div className="flex justify-between">
              <span>{query.adult} Adults</span>
              <span>IDR {data.data.subTotalPrice.adult}</span>
            </div>
            <div className="flex justify-between">
              <span>{query.child} Children</span>
              <span>IDR {data.data.subTotalPrice.child}</span>
            </div>
            <div className="flex justify-between">
              <span>{query.baby} Babies</span>
              <span>IDR {data.data.subTotalPrice.baby}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>IDR {data.data.tax}</span>
            </div>
            <div className="flex justify-between border-t pt-2 text-lg font-bold">
              <span className="text-[#151515]">Total</span>
              <span className="text-[#7126B5]">IDR {data.data.total}</span>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default DetailOrderFlight;
