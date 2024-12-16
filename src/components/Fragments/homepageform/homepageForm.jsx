import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faXmark,
  faRepeat,
  faCalendar,
  faToggleOn,
  faToggleOff,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

import Class from "./Class";
import SetDate2 from "../../Elements/Input/SetDate2";
import Passengers from "./passengers";
import DatePicker from "../../Elements/Input/SetDate";
import Destination from "./Destination";
import { fetchFlights } from "../../../services/flightsService";

function HomepageForm() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(null);
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    depCity: {},
    arrCity: {},
    depDate: "",
    arrDate: null,
    isArrival: false,
    totalPassengers: [],
    seatClass: "",
    isRotated: false,
  });

  const handleRotate = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      isRotated: !prevFilters.isRotated,
      depCity: prevFilters.arrCity,
      arrCity: prevFilters.depCity,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!filters.depCity || Object.keys(filters.depCity).length === 0) {
        throw new Error("Please select a departure city.");
      }
      if (!filters.arrCity || Object.keys(filters.arrCity).length === 0) {
        throw new Error("Please select an arrival city.");
      }
      if (!filters.depDate) {
        throw new Error("Please select a departure date.");
      }
      if (
        !filters.totalPassengers ||
        filters.totalPassengers.length === 0 ||
        filters.totalPassengers.every((passenger) => passenger === 0)
      ) {
        throw new Error("Please select the number of passengers.");
      }
      if (!filters.seatClass) {
        throw new Error("Please select a seat class.");
      }

      const response = await fetchFlights(filters);

      navigate("/ticket-list", { state: { filters } });
    } catch (error) {
      toast.error((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } pointer-events-auto flex w-full max-w-md bg-white`}
        >
          <span className="flex flex-col gap-2 text-sm">
            {error.response
              ? `${error.response?.messages?.line_1 || "An unexpected error occurred."} 
              ${error.response?.messages?.line_2 || ""}`
              : error.message}
          </span>
          <FontAwesomeIcon
            icon={faXmark}
            className="h-6 w-6 cursor-pointer text-[#151515]"
            onClick={() => toast.dismiss(t.id)}
          />
        </div>
      ));
    }
  };

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 500);
    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const handleClickDate = (field) => {
    setCurrentField(field);
    setIsCalendarOpen(true);
  };

  const handleDateSelection = (date) => {
    setFilters((prev) => ({
      ...prev,
      [currentField]: date,
    }));
    setIsCalendarOpen(false);
    setCurrentField(null);
  };

  const handleToggle = () => {
    setFilters((prev) => ({
      ...prev,
      arrDate: "",
      isArrival: !prev.isArrival,
    }));
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex h-full w-[90vw] flex-col justify-between rounded-lg md:w-full">
        <div className="flex h-full flex-col justify-around gap-4 p-6">
          <p className="hidden cursor-default select-none font-bold text-black md:block">
            Pilih Jadwal Penerbangan spesial di{" "}
            <span className="text-[#7126B5]">SkyTicket!</span>
          </p>

          <div className="relative flex flex-col items-center justify-between rounded-lg border py-2 md:flex-row md:gap-4 md:border-0 md:py-0">
            <div className="relative flex items-center gap-6 pb-1 md:pb-0">
              <div className="flex items-center gap-3 text-gray-500 before:absolute before:bottom-0 before:left-[10%] before:h-[1px] before:w-[80%] before:border-b-2 before:border-gray-400 before:content-[''] md:before:border-b-0">
                <FontAwesomeIcon icon={faPlaneDeparture} className="size-6" />
                <p className="w-[45px] cursor-default select-none">From</p>
              </div>
              <Destination
                value={filters.depCity}
                onChange={(newDepCity) =>
                  setFilters((prev) => ({ ...prev, depCity: newDepCity }))
                }
                depOrArr="dep"
              />
            </div>
            <FontAwesomeIcon
              icon={faRepeat}
              className={`absolute right-4 top-[43px] h-4 w-4 cursor-pointer rounded-lg bg-black p-1 text-white transition-transform duration-300 md:static ${
                filters.isRotated
                  ? "-rotate-90 md:rotate-180"
                  : "rotate-90 md:rotate-0"
              }`}
              onClick={handleRotate}
            />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-gray-500">
                <FontAwesomeIcon icon={faPlaneArrival} className="size-6" />
                <p className="w-[45px] cursor-default select-none md:w-auto">
                  To
                </p>
              </div>
              <Destination
                value={filters.arrCity}
                onChange={(newArrCity) =>
                  setFilters((prev) => ({ ...prev, arrCity: newArrCity }))
                }
                depOrArr="arr"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3 md:gap-6">
              <div className="flex items-center gap-3 text-gray-500">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="size-6 text-[#6b7280]"
                />
                <p className="hidden w-[45px] cursor-default select-none md:block">
                  Date
                </p>
              </div>
              <div className="mr-3 md:mr-0">
                <p className="cursor-default select-none text-gray-500">
                  Departure
                </p>
                {isCalendarOpen && currentField === "depDate" && (
                  <SetDate2
                    onClose={() => setIsCalendarOpen(false)}
                    onClick={(date) => handleDateSelection(date)}
                  />
                )}
                {isMobile ? (
                  <input
                    type="text"
                    placeholder="Select a date"
                    readOnly
                    value={filters.depDate || ""}
                    className="w-[30vw] border-b border-gray-500 bg-white py-2 font-medium text-black placeholder-gray-300 focus:border-slate-400 focus:outline-none"
                    onClick={() => handleClickDate("depDate")}
                  />
                ) : (
                  <DatePicker
                    disable={false}
                    change={(newDepDate) =>
                      setFilters((prev) => ({ ...prev, depDate: newDepDate }))
                    }
                  />
                )}
              </div>
              <FontAwesomeIcon
                icon={faCalendar}
                className="block size-6 text-[#6b7280] md:hidden"
              />
              <div>
                <p className="cursor-default select-none text-gray-500">
                  Return
                </p>
                {isCalendarOpen && currentField === "arrDate" && (
                  <SetDate2
                    onClose={() => setIsCalendarOpen(false)}
                    onClick={(date) => handleDateSelection(date)}
                  />
                )}
                {isMobile ? (
                  <input
                    type="text"
                    placeholder="Select a date"
                    disabled={!filters.isArrival}
                    readOnly
                    value={filters.isArrival ? filters.arrDate : ""}
                    className={`w-[30vw] border-b border-gray-500 bg-white py-2 font-medium text-black placeholder-gray-300 focus:border-slate-400 focus:outline-none ${
                      !filters.isArrival ? "cursor-not-allowed bg-gray-200" : ""
                    }`}
                    onClick={() => handleClickDate("arrDate")}
                  />
                ) : (
                  <DatePicker
                    disable={filters.isArrival ? false : true}
                    change={(newArrDate) =>
                      setFilters((prev) => ({ ...prev, arrDate: newArrDate }))
                    }
                  />
                )}
              </div>
            </div>

            <div className="-order-1 flex w-full items-center justify-between md:order-none md:w-auto">
              <p className="block cursor-default select-none text-black md:hidden">
                Pulang-Pergi?
              </p>
              <FontAwesomeIcon
                icon={filters.isArrival ? faToggleOn : faToggleOff}
                className="h-14 w-9 cursor-pointer text-[#4B1979] md:h-10 md:w-6"
                onClick={handleToggle}
              />
            </div>

            <div className="flex items-center gap-3 md:gap-6">
              <div className="hidden w-[45px] items-center gap-3 text-gray-500 md:flex md:w-auto">
                <img
                  alt="Seat Icon"
                  src="/src/assets/icons/seat.svg"
                  className="size-6"
                />
                <p className="cursor-default select-none">To</p>
              </div>
              <FontAwesomeIcon
                icon={faUser}
                className="block size-6 text-[#6b7280] md:hidden"
              />
              <div className="mr-3 md:mr-0">
                <p className="cursor-default select-none text-gray-500">
                  Passengers
                </p>
                <Passengers
                  change={(newPassenger) =>
                    setFilters((prev) => ({
                      ...prev,
                      totalPassengers: newPassenger,
                    }))
                  }
                />
              </div>
              <div className="block w-6 md:hidden">
                <img
                  alt="Seat Icon"
                  src="/src/assets/icons/seat.svg"
                  className="size-7"
                />
              </div>
              <div>
                <p className="cursor-default select-none text-gray-500">
                  Seat Class
                </p>
                <Class
                  change={(newSeat) =>
                    setFilters((prev) => ({
                      ...prev,
                      seatClass: newSeat,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-t-none bg-purple-700 py-3 font-bold text-white"
          onClick={handleSubmit}
        >
          Cari Penerbangan
        </button>
      </div>
    </>
  );
}
export default HomepageForm;
