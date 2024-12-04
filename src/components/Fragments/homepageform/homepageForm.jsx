import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faCalendar,
  faToggleOn,
  faRepeat,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import Passengers from "./Passengers";
import DatePicker from "../../Elements/Input/SetDate";
import Class from "./Class";
import Destination from "./Destination";
import { useNavigate } from "react-router-dom";

function HomepageForm() {
  const [isArrival, setIsArrival] = useState(false);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  const navigate = useNavigate();

  const handleRotate = () => {
    setIsRotated((prev) => !prev);
    setFromValue((prevFrom) => {
      setToValue(prevFrom);
      return toValue;
    });
  };

  return (
    <>
      <div className="flex h-full w-full flex-col justify-between rounded-lg">
        <div className="flex h-full flex-col justify-around gap-4 p-6">
          <p className="font-bold text-black">
            Pilih Jadwal Penerbangan spesial di{" "}
            <span className="text-[#7126B5]">SkyTicket!</span>
          </p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-gray-500">
                <FontAwesomeIcon icon={faPlaneDeparture} className="size-6" />
                <p className="cursor-default select-none">From</p>
              </div>
              <Destination value={fromValue} onChange={setFromValue} />
            </div>
            <FontAwesomeIcon
              icon={faRepeat}
              className={`h-4 w-4 cursor-pointer rounded-lg bg-black p-1 text-white transition-transform duration-300 ${
                isRotated ? "rotate-180" : ""
              }`}
              onClick={handleRotate}
            />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-gray-500">
                <FontAwesomeIcon icon={faPlaneArrival} className="size-6" />
                <p className="cursor-default select-none">To</p>
              </div>
              <Destination value={toValue} onChange={setToValue} />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-gray-500">
                <FontAwesomeIcon icon={faCalendar} className="size-6" />
                <p className="cursor-default select-none">Date</p>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <p className="cursor-default select-none text-gray-500">
                    Departure
                  </p>
                  <DatePicker disable={false} />
                </div>
                <div>
                  <p className="cursor-default select-none text-gray-500">
                    Return
                  </p>
                  <DatePicker disable={isArrival ? false : true} />
                </div>
              </div>
            </div>

            <FontAwesomeIcon
              icon={isArrival ? faToggleOn : faToggleOff}
              className="h-[40px] w-6 cursor-pointer text-[#4B1979]"
              onClick={() => setIsArrival(!isArrival)}
            />

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-gray-500">
                <img
                  alt="Seat Icon"
                  src="/src/assets/icons/seat.svg"
                  className="size-6"
                />
                <p className="cursor-default select-none">To</p>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <p className="cursor-default select-none text-gray-500">
                    Passengers
                  </p>
                  <Passengers />
                </div>
                <div>
                  <p className="cursor-default select-none text-gray-500">
                    Seat Class
                  </p>
                  <Class />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-t-none bg-purple-700 py-3 font-bold text-white"
          onClick={() => navigate("/ticket-list/data")}
        >
          Cari Penerbangan
        </button>
      </div>
    </>
  );
}
export default HomepageForm;
