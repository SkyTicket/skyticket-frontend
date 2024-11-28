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
import Passengers from "./passengers";
import DatePicker from "../../elements/homepageForm/date";
import Destination from "./destination";
import Kelas from "./kelas";

function HomepageForm() {
  const [isArrival, setIsArrival] = useState(false);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [isRotated, setIsRotated] = useState(false);

  const handleRotate = () => {
    setIsRotated((prev) => !prev);
    setFromValue((prevFrom) => {
      setToValue(prevFrom);
      return toValue;
    });
  };

  return (
    <>
      <div className="border border-black rounded-lg">
        <div className="flex flex-col gap-4 p-4">
          <p className="font-bold">
            Pilih Jadwal Penerbangan spesial di{" "}
            <span className="text-purple-600">Tiketku!</span>
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
                  <DatePicker />
                </div>
                <div>
                  <p className="text-gray-500 cursor-default select-none">
                    Arrival
                  </p>
                  <DatePicker />
                </div>
              </div>
            </div>

            <FontAwesomeIcon
              icon={isArrival ? faToggleOff : faToggleOn}
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsArrival(!isArrival)}
            />

            <div className="flex items-center gap-6">
              <div className="text-gray-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                <p className="cursor-default select-none">To</p>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <p className="text-gray-500 cursor-default select-none">
                    Passangers
                  </p>
                  <Passengers />
                </div>
                <div>
                  <p className="text-gray-500 cursor-default select-none">
                    Seat Class
                  </p>
                  <Kelas />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="font-bold text-white bg-purple-700 w-full py-3 rounded-t-none"
        >
          Cari Penerbangan
        </button>
      </div>
    </>
  );
}
export default HomepageForm;
