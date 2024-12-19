import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faXmark,
  faRepeat,
  faCalendar,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import Class from "./Class";
import SetDate2 from "../../Elements/Input/SetDate2";
import Passengers from "./passengers";
import DatePicker from "../../Elements/Input/SetDate";
import Destination from "./Destination";
import { fetchFlights } from "../../../services/flightsService";

function HomepageForm({ prefillData }) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(null);
  const [filters, setFilters] = useState({
    depCity: {},
    arrCity: {},
    depDate: "",
    arrDate: null,
    isArrival: false,
    totalPassengers: [],
    seatClass: "",
    isRotated: false,
    sortBy: "lowest_price",
    page: 1,
  });

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 500);
    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  useEffect(() => {
    if (prefillData) {
      if (prefillData.departure) {
        const departureCity = {
          airport: `${prefillData.departure.code} - ${prefillData.departure.city}`,
          input_value: `${prefillData.departure.code}`,
        };

        setFilters((prev) => ({
          ...prev,
          depCity: departureCity,
        }));
      }

      if (prefillData.arrival) {
        const arrivalCity = {
          airport: `${prefillData.arrival.code} - ${prefillData.arrival.city}`,
          input_value: `${prefillData.arrival.code}`,
        };

        setFilters((prev) => ({
          ...prev,
          arrCity: arrivalCity,
        }));
      }

      if (prefillData.depDate) {
        setFilters((prev) => ({
          ...prev,
          depDate: prefillData.depDate,
        }));
      }
    }
  }, [prefillData]);

  const handleSubmit = async () => {
    if (
      !filters.depCity.input_value ||
      !filters.arrCity.input_value ||
      !filters.depDate
    ) {
      toast.error("Please fill in all required fields!");
      return;
    }
    try {
      if (!filters.depCity || Object.keys(filters.depCity).length === 0) {
        throw new Error("Silakan pilih kota keberangkatan Anda.");
      }
      if (!filters.arrCity || Object.keys(filters.arrCity).length === 0) {
        throw new Error("Silakan pilih kota kedatangan Anda.");
      }
      if (!filters.depDate) {
        throw new Error("Silakan pilih tanggal keberangkatan Anda.");
      }
      if (
        !filters.totalPassengers ||
        filters.totalPassengers.length === 0 ||
        filters.totalPassengers.every((passenger) => passenger === 0)
      ) {
        throw new Error("Silakan pilih jumlah penumpang.");
      }
      if (!filters.seatClass) {
        throw new Error("Silakan pilih kelas kursi.");
      }

      const response = await fetchFlights(filters);
      console.log(filters)
      const params = new URLSearchParams({
        depCity: filters.depCity,
        arrCity: filters.arrCity,
        depDate: filters.depDate,
        isArrival: filters.isArrival,
        isRotated: filters.isRotated,
        seatClass: filters.seatClass,
        adult: filters.totalPassengers[0],
        child: filters.totalPassengers[1], 
        baby: filters.totalPassengers[2]
      });
      
      navigate(`/ticket-list?${params}`, { state: { filters } });
    } catch (error) {
      toast.error((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } pointer-events-auto flex w-full max-w-md items-center bg-white`}
        >
          <span className="flex flex-col gap-2 text-sm">
            {error.response
              ? `${error.response?.messages?.line_1 || "Terjadi kesalahan."} 
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

  const handleRotate = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      isRotated: !prevFilters.isRotated,
      depCity: prevFilters.arrCity,
      arrCity: prevFilters.depCity,
    }));
  };

  const handlePassengersChange = useCallback((newPassengers) => {
    setFilters((prev) => ({
      ...prev,
      totalPassengers: newPassengers,
    }));
  }, []);

  const handleSeatClassChange = useCallback((newSeatClass) => {
    setFilters((prev) => ({
      ...prev,
      seatClass: newSeatClass,
    }));
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
    setIsToggleOn(!isToggleOn);
    setFilters((prev) => ({
      ...prev,
      arrDate: "",
      isArrival: !prev.isArrival,
    }));
  };

  return (
    <>
      <Toaster />
      <div className="flex h-full w-full flex-col justify-between">
        <div className="m-2 md:m-8">
          <span className="hidden cursor-default select-none text-base font-bold text-black lg:block lg:text-xl">
            Pilih Jadwal Penerbangan Spesial di{" "}
            <span className="text-[#7126B5]">SkyTicket!</span>
          </span>
        </div>

        <div className="relative mx-4 flex flex-col items-center justify-between rounded-xl border border-[#D1D3D4] lg:mx-8 lg:flex-row lg:gap-4 lg:border-0 lg:py-0">
          <div className="relative flex items-center gap-6">
            <div className="flex items-center gap-3 text-[#8A8A8A] before:absolute before:bottom-0 before:left-8 before:h-[1px] before:w-[83%] before:border-b-2 before:border-[#D0D0D0] before:content-[''] lg:before:border-b-0">
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                className="size-6 text-black opacity-60"
              />
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
            className={`absolute right-4 top-[46px] h-4 w-4 cursor-pointer rounded-lg bg-black p-1 text-white transition-transform duration-300 lg:static ${
              filters.isRotated ? "rotate-180" : "rotate-0"
            }`}
            onClick={handleRotate}
          />

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-[#8A8A8A]">
              <FontAwesomeIcon
                icon={faPlaneArrival}
                className="size-6 text-black opacity-60"
              />
              <p className="w-[45px] cursor-default select-none">To</p>
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

        <div className="m-4 flex flex-col items-center justify-between gap-4 lg:m-8 lg:flex-row">
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-3 text-[#8A8A8A]">
              <FontAwesomeIcon
                icon={faCalendar}
                className="size-6 text-black opacity-60"
              />
              <p className="hidden w-[45px] cursor-default select-none md:block">
                Date
              </p>
            </div>
            <div className="mr-3 md:mr-0">
              <p className="cursor-default select-none text-[#8A8A8A]">
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
                  placeholder="Pilih Tanggal"
                  readOnly
                  value={filters.depDate || ""}
                  className="w-[30vw] border-b-2 border-[#D0D0D0] bg-white py-2 font-medium text-black placeholder-gray-300 focus:outline-none"
                  onClick={() => handleClickDate("depDate")}
                />
              ) : (
                <DatePicker
                  disable={false}
                  valueCard={prefillData?.depDate}
                  change={(newDepDate) => {
                    setFilters((prev) => ({ ...prev, depDate: newDepDate }));
                  }}
                />
              )}
            </div>
            <FontAwesomeIcon
              icon={faCalendar}
              className="block size-6 text-black opacity-60 md:hidden"
            />
            <div>
              <p className="cursor-default select-none text-[#8A8A8A]">
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
                  placeholder="Pilih Tanggal"
                  disabled={!filters.isArrival}
                  readOnly
                  value={filters.isArrival ? filters.arrDate : ""}
                  className={`w-[30vw] border-b border-gray-500 bg-white py-2 font-medium text-black placeholder-gray-300 focus:outline-none ${
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

          <div className="-order-1 flex w-full items-center justify-between lg:order-none lg:w-auto">
            <p className="block cursor-default select-none text-black lg:hidden">
              Pulang-Pergi?
            </p>

            <div
              className={`flex h-6 w-12 cursor-pointer items-center rounded-[20px] p-1 ${isToggleOn ? "bg-[#4B1979]" : "bg-gray-300"}`}
              onClick={handleToggle}
            >
              <div
                className={`h-4 w-4 transform rounded-2xl bg-white duration-300 ease-in-out ${isToggleOn ? "translate-x-6" : "translate-x-0"}`}
              ></div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden w-[45px] items-center gap-3 text-[#8A8A8A] md:flex md:w-auto">
              <img
                alt="Seat Icon"
                src="/public/assets/icons/seat.svg"
                className="size-6"
              />
              <p className="cursor-default select-none">Seat</p>
            </div>
            <FontAwesomeIcon
              icon={faUser}
              className="block size-6 text-black opacity-60 md:hidden"
            />

            <div className="mr-3 md:mr-0">
              <p className="cursor-default select-none text-[#8A8A8A]">
                Passenger
              </p>
              <Passengers
                change={handlePassengersChange}
                prefillPassengers={prefillData?.totalPassengers}
              />
            </div>
            <div className="block w-6 md:hidden">
              <img
                alt="Seat Icon"
                src="/public/assets/icons/seat.svg"
                className="size-7"
              />
            </div>

            <div>
              <p className="cursor-default select-none text-[#8A8A8A]">
                Seat Class
              </p>
              <Class
                change={handleSeatClassChange}
                prefillClass={prefillData?.seatClass}
                data={filters}
              />
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
