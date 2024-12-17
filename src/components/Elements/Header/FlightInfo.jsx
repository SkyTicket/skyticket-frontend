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
    <div className="flex items-center gap-2">
      {/* Button back */}
      <Link to="/">
        <button className="rounded-lg bg-[#A06ECE] px-4 py-2 text-purple-600">
          <img
            src="/src/assets/icons/arrow-left.svg"
            alt="Back"
            className="h-5 w-5 hover:cursor-pointer "
          />
        </button>
      </Link>
      {/* Detail flight */}
      <span className="font-medium text-white">
        {`${departure} > ${arrival} - ${passengers} Penumpang - ${seatClass}`}
      </span>
    </div>
  );
};

export default FlightInfo;
