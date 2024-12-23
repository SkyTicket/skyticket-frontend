import React, { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFlightDetails } from "../../../hooks/useFetchFlightDetails";

const SelectSeat = ({ selectedSeats, availableSeats, onSeatSelect }) => {
  const [search] = useSearchParams();
  const FlightId = search.get("flightId");
  const SeatClass = search.get("seatClass");
  const Adult = search.get("adult");
  const Child = search.get("child");
  const Baby = search.get("baby");

  const [query, setQuery] = useState({
    flightId: FlightId,
    seatClass: SeatClass,
    adult: Adult,
    child: Child,
    baby: Baby,
  });

  // Debug state untuk melihat seat yang dipilih
  const [debugInfo, setDebugInfo] = useState({
    displaySeatId: null,
    backendSeatId: null,
    seatData: null
  });

  const { data, loading, error } = useFlightDetails(query);
  const seatTotal = data?.data?.seatAssignments.length;
  const seatData = data?.data?.seatAssignments;

  const methods = useFormContext();
  const { update } = useFieldArray({
    control: methods.control,
    name: "passengers",
  });

  const [currentPassengerIndex, setCurrentPassengerIndex] = useState(0);

  // Generate seat layout data
  const rows = Array.from({ length: seatTotal / 6 }, (_, i) => i + 1);
  const leftColumns = ["A", "B", "C"];
  const rightColumns = ["D", "E", "F"];

  // Create mapping between display format and backend IDs
  const seatMapping = {};
  const reverseSeatMapping = {}; // Untuk mencari display ID dari backend ID

  if (seatData) {
    seatData.forEach((seat) => {
      const seatNumber = seat.seat?.seat_number;
      if (seatNumber) {
        seatMapping[seatNumber] = seat.seat_id;
        reverseSeatMapping[seat.seat_id] = seatNumber;
        console.log(`Mapping created: Display ${seatNumber} -> Backend ${seat.id}`);
      }
    });
  }

  // Predefined unavailable seats
  const unavailableSeats = new Set([]);
  seatData?.forEach((seat) => {
    if (!seat.available) {
      const seatNumber = seat.seat?.seat_number;
      if (seatNumber) {
        unavailableSeats.add(seatNumber);
        console.log(`Marked as unavailable: ${seatNumber}`);
      }
    }
  });

  // Special seats (if any)
  const specialSeats = {};

  // Get all selected seats across passengers
  const getAllSelectedSeats = () => {
    const selected = methods
      .getValues("passengers")
      .map((p) => p.selected_seat)
      .filter(Boolean);
    console.log("Currently selected seats:", selected.map(id => `Backend: ${id}, Display: ${reverseSeatMapping[id]}`));
    return selected;
  };

  const handleSeatSelect = (displaySeatId) => {
    const backendSeatId = seatMapping[displaySeatId];
    const allSelectedSeats = getAllSelectedSeats();

    // Update debug info
    setDebugInfo({
      displaySeatId,
      backendSeatId,
      seatData: seatData?.find(seat => seat.seat_id === backendSeatId)
    });

    console.log('Seat Selected:', {
      displayFormat: displaySeatId,
      backendId: backendSeatId,
      currentPassenger: currentPassengerIndex,
      alreadySelected: allSelectedSeats.includes(backendSeatId)
    });

    // If seat is already selected by current passenger, unselect it
    if (
      methods.getValues(`passengers.${currentPassengerIndex}.selected_seat`) ===
      backendSeatId
    ) {
      console.log(`Unselecting seat ${displaySeatId} (${backendSeatId})`);
      update(currentPassengerIndex, {
        ...methods.getValues(`passengers.${currentPassengerIndex}`),
        selected_seat: "",
      });
      return;
    }

    // If seat is already taken by another passenger
    if (allSelectedSeats.includes(backendSeatId)) {
      console.log(`Seat ${displaySeatId} (${backendSeatId}) already taken`);
      toast.error("Kursi ini telah diambil oleh penumpang lain");
      return;
    }

    // Assign seat to current passenger
    console.log(`Assigning seat ${displaySeatId} (${backendSeatId}) to passenger ${currentPassengerIndex}`);
    update(currentPassengerIndex, {
      ...methods.getValues(`passengers.${currentPassengerIndex}`),
      selected_seat: backendSeatId,
    });
  };

  const getSeatColor = (displaySeatId) => {
    const backendSeatId = seatMapping[displaySeatId];

    if (unavailableSeats.has(displaySeatId)) return "bg-gray-300";
    if (specialSeats[displaySeatId]) return "bg-purple-600";

    const currentPassengerSeat = methods.getValues(
      `passengers.${currentPassengerIndex}.selected_seat`
    );

    const allSelectedSeats = getAllSelectedSeats();
    if (backendSeatId === currentPassengerSeat) return "bg-purple-600";
    if (allSelectedSeats.includes(backendSeatId)) return "bg-red-500";

    return "bg-[#73CA5C] hover:bg-green-500";
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full max-w-2xl rounded-lg border border-gray-300">
      <div className="p-6">
        <h2 className="mb-6 text-xl font-bold text-black">Pilih Kursi</h2>
        
        {/* Debug Information Panel */}
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold mb-2">Debug Info:</h3>
          <p>Display Seat ID: {debugInfo.displaySeatId}</p>
          <p>Backend Seat ID: {debugInfo.backendSeatId}</p>
          <p>Current Passenger: {currentPassengerIndex}</p>
          <p>Selected Seats: {getAllSelectedSeats().map(id => `${reverseSeatMapping[id]}(${id})`).join(', ')}</p>
        </div>

        <div className="mb-8 rounded-lg bg-[#73CA5C] p-4 text-center text-white">
          <h3 className="font-medium">Economy</h3>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="grid gap-2">
            {/* Column Headers */}
            <div className="grid grid-cols-7 gap-2">
              <div className="col-span-3 grid grid-cols-3">
                {leftColumns.map((col) => (
                  <div
                    key={col}
                    className="text-center font-medium text-[#8A8A8A]"
                  >
                    {col}
                  </div>
                ))}
              </div>
              <div />
              <div className="col-span-3 grid grid-cols-3">
                {rightColumns.map((col) => (
                  <div
                    key={col}
                    className="text-center font-medium text-[#8A8A8A]"
                  >
                    {col}
                  </div>
                ))}
              </div>
            </div>

            {/* Seat Layout */}
            {rows.map((row) => (
              <div key={row} className="grid grid-cols-7 gap-2">
                <div className="col-span-3 grid grid-cols-3 gap-2">
                  {leftColumns.map((col) => {
                    const seatId = `${row}${col}`;
                    return (
                      <button
                        key={seatId}
                        type="button"
                        className={`flex h-10 w-10 items-center justify-center rounded-lg text-base font-medium text-white transition-colors ${getSeatColor(
                          seatId
                        )}`}
                        onClick={() => handleSeatSelect(seatId)}
                        disabled={unavailableSeats.has(seatId)}
                      >
                        {unavailableSeats.has(seatId)
                          ? "X"
                          : specialSeats[seatId] || seatId}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center rounded-md text-xs font-semibold text-[#8A8A8A]">
                  {row}
                </div>

                <div className="col-span-3 grid grid-cols-3 gap-2">
                  {rightColumns.map((col) => {
                    const seatId = `${row}${col}`;
                    return (
                      <button
                        key={seatId}
                        type="button"
                        className={`flex h-10 w-10 items-center justify-center rounded-lg text-base font-medium text-white transition-colors ${getSeatColor(
                          seatId
                        )}`}
                        onClick={() => handleSeatSelect(seatId)}
                        disabled={unavailableSeats.has(seatId)}
                      >
                        {unavailableSeats.has(seatId)
                          ? "X"
                          : specialSeats[seatId] || seatId}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSeat;