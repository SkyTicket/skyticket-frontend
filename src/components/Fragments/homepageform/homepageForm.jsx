import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faRepeat,
  faCalendar,
  faToggleOn,
  faToggleOff,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

import Class from "./Class";
import Passengers from "./Passengers";
import DatePicker from "../../Elements/Input/SetDate";
import Destination from "./Destination";

function HomepageForm() {
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
      const response = await axios.get(
        "http://34.101.115.143:3000/api/v1/flights",
        {
          params: {
            departure_airport: filters.depCity.input_value,
            arrival_airport: filters.arrCity.input_value,
            flight_departure_date: filters.depDate,
            returning_flight_departure_date: filters.arrDate,
            is_round_trip: filters.isArrival,
            total_adult_passengers: filters.totalPassengers[0],
            total_child_passengers: filters.totalPassengers[1],
            total_infant_passengers: filters.totalPassengers[2],
            seat_class_type: filters.seatClass,
          },
        },
      );
      navigate("/ticket-list", { state: { filters } });
      // console.log(response);
    } catch (error) {
      if (error.response.status === 404) {
        navigate("/ticket-list", {
          state: { filters },
        });
      } else {
        const err = error.response.data.messages;
        if (err) {
          toast.error((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } pointer-events-auto flex w-full max-w-md bg-white`}
            >
              <span className="flex flex-col gap-2 text-sm">
                {err.line_1}
                {err.line_2}
              </span>
              <FontAwesomeIcon
                icon={faXmark}
                className="h-6 w-6 cursor-pointer text-[#151515]"
                onClick={() => toast.dismiss(t.id)}
              />
            </div>
          ));
        }
      }
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex h-full w-[90vw] flex-col justify-between rounded-lg md:w-full">
        <div className="flex h-full flex-col justify-around gap-4 p-6">
          <p className="hidden font-bold text-black md:block">
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
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-gray-500">
                <FontAwesomeIcon icon={faCalendar} className="size-6" />
                <p className="hidden cursor-default select-none md:block">
                  Date
                </p>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <p className="cursor-default select-none text-gray-500">
                    Departure
                  </p>
                  <DatePicker
                    disable={false}
                    change={(newDepDate) =>
                      setFilters((prev) => ({ ...prev, depDate: newDepDate }))
                    }
                  />
                </div>
                <div>
                  <p className="cursor-default select-none text-gray-500">
                    Return
                  </p>
                  <DatePicker
                    disable={filters.isArrival ? false : true}
                    change={(newArrDate) =>
                      setFilters((prev) => ({ ...prev, arrDate: newArrDate }))
                    }
                  />
                </div>
              </div>
            </div>

            <FontAwesomeIcon
              icon={filters.isArrival ? faToggleOn : faToggleOff}
              className="-order-1 h-[40px] w-6 cursor-pointer text-[#4B1979] md:order-none"
              onClick={() =>
                setFilters((prev) => ({ ...prev, isArrival: !prev.isArrival }))
              }
            />

            <div className="flex items-center gap-6">
              <div className="flex w-5 items-center gap-3 text-gray-500 md:w-auto">
                <img
                  alt="Seat Icon"
                  src="/src/assets/icons/seat.svg"
                  className="size-6"
                />
                <p className="hidden cursor-default select-none md:block">To</p>
              </div>
              <div className="flex gap-[32px]">
                <div>
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
