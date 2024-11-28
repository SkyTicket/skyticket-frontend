import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import BaggageIcon from "./baggageicon";

function AccordionBox({ onclickHandler, flight, isOpen }) {
  return (
    <>
      <div
        className={`flex flex-col-reverse md:flex-col justify-between items-center px-4 py-3 gap-2 bg-white cursor-pointer ${
          isOpen === flight.id ? "c-bottom-border-2" : ""
        }`}
        onClick={onclickHandler}
      >
        <div className="flex justify-between w-full items-center border-t border-gray-400 pt-2 md:pt-0 md:border-0">
          <div className="flex gap-2 items-center">
            <img src={flight.airLineLogo} alt="logo" className="h-6" />
            <div className="flex flex-col">
              <p>Jet Air - Economy</p>
              <div className="block md:hidden w-6">
                <BaggageIcon />
              </div>
            </div>
          </div>
          <FontAwesomeIcon
            icon={isOpen === flight.id ? faChevronUp : faChevronDown}
            className="h-3 border-2 rounded-full p-1"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex text-left w-4/6 gap-2 items-center">
            <div className="w-11">
              <p className="font-bold">{flight.departureTime}</p>
              <p className="font-semibold">{flight.departureCityShort}</p>
            </div>
            <div className="flex flex-col text-center w-1/2 text-gray-400">
              <p className="font-bold">{flight.duration}</p>
              <div className="flex items-center">
                <div className="bg-gray-300 w-full h-0.5" />
                <div className="border-t border-r border-gray-300 w-1 h-1 rotate-45 -translate-x-1" />
              </div>
              <p className="font-semibold">direct</p>
            </div>
            <div className="w-11">
              <p className="font-bold">{flight.arrivalTime}</p>
              <p className="font-semibold">{flight.arrivalCityShort}</p>
            </div>
            <div className="hidden md:block">
              <BaggageIcon />
            </div>
          </div>
          <div className="text-right">
            <div className="text-purple-700 font-bold text-primary">
              {flight.price}
            </div>
            <button className="hidden md:block bg-purple-700 text-white px-7 py-1 rounded-lg">
              Pilih
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AccordionBox;
