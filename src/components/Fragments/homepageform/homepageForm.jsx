import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faCalendar,
  faToggleOn,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import Destinasi from "./destinasi";
import Kelas from "./kelas";
import Passengers from "./passengers";
import DatePicker from "../../elements/homepageForm/date";

function HomepageForm() {
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
                <p>From</p>
              </div>
              <Destinasi />
            </div>
            <FontAwesomeIcon
              icon={faRepeat}
              className="w-4 h-4 cursor-pointer"
            />
            <div className="flex gap-6 items-center">
              <div className="flex gap-1 items-center text-gray-500">
                <FontAwesomeIcon icon={faPlaneArrival} className="w-4 h-4" />
                <p>To</p>
              </div>
              <Destinasi />
            </div>
          </div>

          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-6">
              <div className="text-gray-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                <p>Date</p>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <p className="text-gray-500">Departure</p>
                  <DatePicker />
                </div>
                <div>
                  <p className="text-gray-500">Arrival</p>
                  <DatePicker />
                </div>
              </div>
            </div>

            <FontAwesomeIcon
              icon={faToggleOn}
              className="w-4 h-4 cursor-pointer"
            />

            <div className="flex items-center gap-6">
              <div className="text-gray-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                <p>To</p>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <p className="text-gray-500">Passangers</p>
                  <Passengers />
                </div>
                <div>
                  <p className="text-gray-500">Seat Class</p>
                  <Kelas />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="font-bold text-white bg-purple-700 w-full rounded-t-none"
        >
          Cari Penerbangan
        </button>
      </div>
    </>
  );
}
export default HomepageForm;
