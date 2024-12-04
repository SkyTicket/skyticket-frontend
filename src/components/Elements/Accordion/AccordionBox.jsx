import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function AccordionBox({ onclickHandler, flight, isOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`flex cursor-pointer flex-col-reverse items-center justify-between gap-2 bg-white px-4 py-3 md:flex-col ${
          isOpen === flight.id
            ? "relative z-[1] before:absolute before:bottom-0 before:left-[5%] before:h-[1px] before:w-[90%] before:border-b-2 before:border-gray-400 before:content-['']"
            : ""
        }`}
        onClick={onclickHandler}
      >
        <div className="flex w-full items-center justify-between border-t border-gray-400 pt-2 md:border-0 md:pt-0">
          <div className="flex items-center gap-2 text-black">
            <img src={flight.airLineLogo} alt="logo" className="h-6" />
            <div className="flex flex-col">
              <p>Jet Air - Economy</p>
              <div className="block w-6 md:hidden">
                <img
                  alt="Baggage Icon"
                  src="/src/assets/icons/baggage.svg"
                  className="w-auto"
                />
              </div>
            </div>
          </div>
          <FontAwesomeIcon
            icon={isOpen === flight.id ? faChevronUp : faChevronDown}
            className="h-3 rounded-full border-2 p-1 text-black"
          />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex w-4/6 items-center gap-2 text-left text-black">
            <div className="w-11">
              <p className="font-bold">{flight.departureTime}</p>
              <p className="font-semibold">{flight.departureCityShort}</p>
            </div>
            <div className="flex w-1/2 flex-col text-center text-gray-400">
              <p className="font-bold">{flight.duration}</p>
              <div className="flex items-center">
                <div className="h-0.5 w-full bg-gray-300" />
                <div className="h-1 w-1 -translate-x-1 rotate-45 border-r border-t border-gray-300" />
              </div>
              <p className="font-semibold">direct</p>
            </div>
            <div className="w-11">
              <p className="font-bold">{flight.arrivalTime}</p>
              <p className="font-semibold">{flight.arrivalCityShort}</p>
            </div>
            <div className="hidden md:block">
              <img
                alt="Baggage Icon"
                src="/src/assets/icons/baggage.svg"
                className="w-auto"
              />
            </div>
          </div>
          <div className="text-right">
            <div className="text-primary font-bold text-purple-700">
              {flight.price}
            </div>
            <button
              className="hidden rounded-lg bg-purple-700 px-7 py-1 text-white md:block"
              onClick={() => navigate("/order-ticket")}
            >
              Pilih
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AccordionBox;
