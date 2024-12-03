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
import Class from "./Class"
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
      <div className="w-full h-full flex flex-col justify-between rounded-lg">
        <div className="flex flex-col gap-4 p-6 justify-around h-full">
          <p className="font-bold">
            Pilih Jadwal Penerbangan spesial di{" "}
            <span className="text-purple-600">SkyTicket!</span>
          </p>

          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className="flex gap-1 items-center text-gray-500">
                <FontAwesomeIcon icon={faPlaneDeparture} className="w-4 h-4" />
                <p className="cursor-default select-none">From</p>
              </div>
              <Destination value={fromValue} onChange={setFromValue} />
            </div>
            <FontAwesomeIcon
              icon={faRepeat}
              className={`w-4 h-4 cursor-pointer bg-black text-white p-1 rounded-lg transition-transform duration-300 ${
                isRotated ? "rotate-180" : ""
              }`}
              onClick={handleRotate}
            />
            <div className="flex gap-6 items-center">
              <div className="flex gap-1 items-center text-gray-500">
                <FontAwesomeIcon icon={faPlaneArrival} className="w-4 h-4" />
                <p className="cursor-default select-none">To</p>
              </div>
              <Destination value={toValue} onChange={setToValue} />
            </div>
          </div>

          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-6">
              <div className="text-gray-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                <p className="cursor-default select-none">Date</p>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <p className="text-gray-500 cursor-default select-none">
                    Departure
                  </p>
                  <DatePicker disable={false} />
                </div>
                <div>
                  <p className="text-gray-500 cursor-default select-none">
                    Arrival
                  </p>
                  <DatePicker disable={isArrival ? false : true} />
                </div>
              </div>
            </div>

            <FontAwesomeIcon
              icon={isArrival ? faToggleOn : faToggleOff}
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsArrival(!isArrival)}
            />

            <div className="flex items-center gap-6">
              <div className="text-gray-500 flex items-center gap-1">
              <img alt="Seat Icon" src="/src/assets/icons/seat.svg" className="w-auto" />
                <p className="cursor-default select-none">To</p>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <p className="text-gray-500 cursor-default select-none">
                    Passengers
                  </p>
                  <Passengers />
                </div>
                <div>
                  <p className="text-gray-500 cursor-default select-none">
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
          className="font-bold text-white bg-purple-700 w-full py-3 rounded-t-none"
          onClick={()=> navigate("/ticket-list/data")}
        >
          Cari Penerbangan
        </button>
      </div>
    </>
  );
}
export default HomepageForm;
