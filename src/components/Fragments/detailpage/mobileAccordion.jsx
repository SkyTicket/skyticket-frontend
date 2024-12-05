import React from "react";
import { useLocation } from "react-router-dom";
import DetFlight from "../components/fragments/detailpage/detailPenerbangan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function MobileAccordion() {
  const location = useLocation();
  const { flight } = location.state || {};

  if (!flight) {
    return <p>No flight data available</p>;
  }

  return (
    <>
      <div className="flex items-center gap-2 px-8 py-2 font-bold">
        <p className="text-purple-600">{flight.departureCity}</p>
        <FontAwesomeIcon icon={faArrowRight} className="" />
        <p className="text-purple-600">{flight.arrivalCity}</p>
        <p>({flight.duration})</p>
      </div>
      <div className="c-width rounded-lg border-2 p-4">
        <DetFlight flight={flight} />
      </div>
    </>
  );
}

export default MobileAccordion;
