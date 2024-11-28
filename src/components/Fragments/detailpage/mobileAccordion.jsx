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
      <div className="flex font-bold gap-2 px-8 py-2 items-center">
        <p className="text-purple-600">{flight.departureCity}</p>
        <FontAwesomeIcon icon={faArrowRight} className="" />
        <p className="text-purple-600">{flight.arrivalCity}</p>
        <p>({flight.duration})</p>
      </div>
      <div className="c-width border-2 rounded-lg p-4">
        <DetFlight flight={flight} />
      </div>
    </>
  );
}

export default MobileAccordion;
