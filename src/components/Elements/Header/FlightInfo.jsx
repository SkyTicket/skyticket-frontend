import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const FlightInfo = () => {
  const location = useLocation();
  const { departure, arrival, passengers, seatClass } = location.state || {
    departure: "JKT",
    arrival: "MLB",
    passengers: 1,
    seatClass: "Economy",
  };

  return (
    <div className="flex items-center gap-4 sm:gap-2 w-full">
      <Link to="/">
        <button className="rounded-lg bg-transparent px-2 py-1 sm:px-4 sm:py-2 text-white shadow-md hover:text-gray-500">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-6 lg:w-4 hover:cursor-pointer"
          />
        </button>
      </Link>
      <span className="font-semibold text-white text-sm sm:text-base md:text-lg lg:text-l">
        {`${departure} > ${arrival} - ${passengers} Penumpang - ${seatClass}`}
      </span>
    </div>
  );
};

export default FlightInfo;
