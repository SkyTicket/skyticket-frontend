function DetFlight({ flight }) {
  return (
    <>
      <div className="before:content[''] relative z-[1] flex justify-between gap-8 pb-4 before:absolute before:bottom-0 before:left-[20%] before:h-[1px] before:w-[60%] before:border-b-2 before:border-gray-400">
        <div className="text-left text-black">
          <p className="font-bold">{flight.departureTime}</p>
          <p>{flight.departureDate}</p>
          <p className="font-semibold">{flight.departure}</p>
        </div>
        <p className="absolute right-0 top-0 font-bold text-purple-500">
          Keberangkatan
        </p>
      </div>

      <div className="before:content[''] relative z-[1] flex items-center gap-4 pb-4 text-black before:absolute before:bottom-0 before:left-[20%] before:h-[1px] before:w-[60%] before:border-b-2 before:border-gray-400">
        <div>
          <img src={flight.airLineLogo} alt="logo" className="h-6" />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div className="font-bold">
            <p>Jet Air - Economy</p>
            <p>{flight.flightNumber}</p>
          </div>
          <div>
            <p className="font-bold">Informasi:</p>
            <p>Baggage {flight.baggage}</p>
            <p>Cabin baggage {flight.cabin}</p>
            <p>{flight.entertainment}</p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-between text-black">
        <div className="text-left">
          <p className="font-bold">{flight.arrivalTime}</p>
          <p>{flight.arrivalDate}</p>
          <p className="font-semibold">{flight.arrival}</p>
        </div>
        <p className="absolute right-0 top-0 font-bold text-purple-500">
          Kedatangan
        </p>
      </div>
    </>
  );
}
export default DetFlight;
