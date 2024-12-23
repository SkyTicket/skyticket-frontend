import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useSearchParams } from "react-router-dom";

function AccordionBox({ onclickHandler, flight, isOpen }) {
  const [search] = useSearchParams()
  const adult = search.get('adult')
  const child = search.get('child')
  const seatClass = search.get('seatClass')
  const baby = search.get('baby')

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`flex cursor-pointer flex-col-reverse items-center justify-between gap-2 bg-white px-4 py-3 md:flex-col ${
          isOpen === flight.flight_id
            ? "relative z-[1] before:absolute before:bottom-0 before:left-[5%] before:h-[1px] before:w-[90%] before:border-b-2 before:border-gray-400 before:content-['']"
            : ""
        }`}
        onClick={onclickHandler}
      >
        <div className="flex w-full items-center justify-between border-t border-gray-400 pt-2 md:border-0 md:pt-0">
          <div className="flex items-center gap-2 text-black">
            <img src={flight.airline_logo} alt="logo" className="h-6" />
            <div className="flex flex-col">
              <p>{flight.airline_name_and_class}</p>
              <div className="block w-6 md:hidden">
                <img
                  alt="Baggage Icon"
                  src="/assets/icons/baggage.svg"
                  className="w-auto"
                />
              </div>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`h-3 rounded-full border-2 p-1 text-black transition-all duration-300 ease-out ${isOpen === flight.flight_id ? "-rotate-180" : ""}`}
          />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex w-4/6 items-center gap-2 text-left text-black">
            <div className="w-11">
              <p className="font-bold">{flight.departure_time}</p>
              <p className="font-semibold">{flight.departure_airport}</p>
            </div>
            <div className="flex w-1/2 flex-col text-center text-gray-400">
              <p className="font-bold">{flight.flight_duration.formatted}</p>
              <div className="flex items-center">
                <div className="h-0.5 w-full bg-gray-300" />
                <div className="h-1 w-1 -translate-x-1 rotate-45 border-r border-t border-gray-300" />
              </div>
              <p className="font-semibold">direct</p>
            </div>
            <div className="w-11">
              <p className="font-bold">{flight.arrival_time}</p>
              <p className="font-semibold">{flight.arrival_airport}</p>
            </div>
            <div className="hidden md:block">
              <img
                alt="Baggage Icon"
                src="/assets/icons/baggage.svg"
                className="w-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-primary font-bold text-purple-700">
              {flight.seat_class_price.total.formatted}
            </div>
            <button
              className="hidden rounded-lg bg-purple-700 px-7 py-1 text-white md:block"
              onClick={() => navigate(`/order-ticket?flightId=${flight.flight_id}&seatClass=${seatClass}&adult=${adult}&child=${child}&baby=${baby}`)}
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
