function DetFlight({ flight }) {
  return (
    <>
      <div className="flex gap-8 c-bottom-border pb-4 justify-between">
        <div className="text-left text-black">
          <p className="font-bold">{flight.departureTime}</p>
          <p>{flight.departureDate}</p>
          <p className="font-semibold">{flight.departure}</p>
        </div>
        <p className="text-purple-500 font-bold absolute top-0 right-0">
          Keberangkatan
        </p>
      </div>

      <div className="flex gap-4 c-bottom-border pb-4 items-center text-black">
        <div>
          <img src={flight.airLineLogo} alt="logo" className="h-6" />
        </div>
        <div className="text-left flex flex-col gap-2">
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

      <div className="flex justify-between relative text-black">
        <div className="text-left">
          <p className="font-bold">{flight.arrivalTime}</p>
          <p>{flight.arrivalDate}</p>
          <p className="font-semibold">{flight.arrival}</p>
        </div>
        <p className="text-purple-500 font-bold absolute top-0 right-0">
          Kedatangan
        </p>
      </div>
    </>
  );
}
export default DetFlight;
