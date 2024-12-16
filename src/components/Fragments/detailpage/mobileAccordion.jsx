import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import DetFlight from "../../Elements/Accordion/DetailFlight";

function MobileAccordion() {
  const location = useLocation();
  const { flight } = location.state || {};
  const navigate = useNavigate();

  if (!flight) {
    return <p>No flight data available</p>;
  }

  return (
    <>
      <div className="fixed top-0 flex w-full items-center gap-4 bg-[#4B1979] p-3">
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => navigate("/ticket-list")}
          className="rotate-180 cursor-pointer"
        />
        <p className="cursor-default select-none">Pilihan Penerbangan</p>
      </div>
      <div className="h-12 w-full"></div>

      <div className="h-[calc(100vh - 154px)] cursor-default select-none overflow-scroll">
        <div className="flex items-center gap-2 px-8 py-2 font-bold text-black">
          <p className="">{flight.departure_airport}</p>
          <FontAwesomeIcon icon={faArrowRight} className="" />
          <p className="">{flight.arrival_airport}</p>
          <p>({flight.flight_duration.formatted})</p>
        </div>
        <div className="flex w-full justify-center">
          <div className="w-[90vw] rounded-lg border-2 p-4">
            <DetFlight flight={flight.flight_details} />
          </div>
        </div>
      </div>

      <div className="h-[106px] w-full"></div>
      <div className="fixed bottom-0 flex w-full flex-col items-center border-t border-gray-500 bg-white">
        <div className="flex w-full cursor-default select-none justify-between p-4 px-5 font-bold text-black">
          <p>Total</p>
          <p className="text-[#7126B5]">
            {flight.seat_class_price.formatted}/pax
          </p>
        </div>
        <button
          className="mb-4 w-[90vw] rounded-lg bg-[#7126B5] px-7 py-1 text-white"
          onClick={() => navigate("/order-ticket")}
        >
          Pilih
        </button>
      </div>
    </>
  );
}

export default MobileAccordion;
