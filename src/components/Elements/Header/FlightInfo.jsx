import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const FlightInfo = () => {
  const location = useLocation();
  const filters = location.state?.filters;
  const totalPassengers =
    filters.totalPassengers[0] +
    filters.totalPassengers[1] +
    filters.totalPassengers[2];
  const data = {
    departure: filters.depCity.input_value,
    arrival: filters.arrCity.input_value,
    passengers: totalPassengers,
    seatClass: filters.seatClass,
  };
  console.log(data);

  return (
    <div className="flex items-center gap-4 sm:gap-2">
      <Link to="/">
        <button className="bg-transparent px-2 py-1 text-white shadow-md hover:text-gray-500 sm:px-4 sm:py-2">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="h-4 w-4 hover:cursor-pointer sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-6 lg:w-4"
          />
        </button>
      </Link>
      <span className="md:text-md relative text-xs font-semibold text-white sm:text-sm lg:text-lg">
        {`${data.departure} > ${data.arrival} - ${data.passengers} Penumpang - ${data.seatClass}`}
      </span>
    </div>
  );
};

export default FlightInfo;
