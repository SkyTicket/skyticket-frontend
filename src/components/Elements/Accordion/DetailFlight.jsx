function DetFlight({ flight }) {
  return (
    <>
      <div className="before:content[''] relative z-[1] flex justify-between gap-8 pb-4 before:absolute before:bottom-0 before:h-[1px] before:w-[100%] before:border-b-2 before:border-gray-400 md:before:left-[20%] md:before:w-[60%]">
        <div className="text-left text-black">
          <p className="font-bold">{flight.departure_time}</p>
          <p>{flight.departure_date}</p>
          <p className="font-semibold">{flight.departure_airport_name}</p>
        </div>
        <p className="absolute right-0 top-0 font-bold text-purple-500">
          Keberangkatan
        </p>
      </div>

      <div className="before:content[''] relative z-[1] flex items-center gap-4 py-4 text-black before:absolute before:bottom-0 before:h-[1px] before:w-[100%] before:border-b-2 before:border-gray-400 md:before:left-[20%] md:before:w-[60%]">
        <div>
          <img src={flight.airline_logo} alt="logo" className="h-6" />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div className="font-bold">
            <p>{flight.airline_name_and_class}</p>
            <p>{flight.flight_number}</p>
          </div>
          <div>
            <p className="font-bold">Informasi:</p>
            <p>Baggage 20 kg</p>
            <p>Cabin baggage 7 kg</p>
            <p>In Flight Entertainment</p>
            {/* <p>Baggage {flight.baggage}</p> // digunakan lagi kalau dari BE sudah ada datanya
            <p>Cabin baggage {flight.cabin}</p>
            <p>{flight.entertainment}</p> */}
          </div>
        </div>
      </div>

      <div className="relative mt-2 flex justify-between text-black">
        <div className="text-left">
          <p className="font-bold">{flight.arrival_time}</p>
          <p>{flight.arrival_date}</p>
          <p className="font-semibold">{flight.arrival_airport_name}</p>
        </div>
        <p className="absolute right-0 top-0 font-bold text-purple-500">
          Kedatangan
        </p> 
      </div>
    </>
  );
}
export default DetFlight;
