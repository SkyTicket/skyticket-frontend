import React, { useEffect, useState } from "react";

const DetailFlight = ({ data }) => {
  const [statusCSS, setStatusCSS] = useState("");
  console.log(data);

  useEffect(() => {
    switch (data?.booking_payment_status) {
      case "Issued":
        setStatusCSS("bg-green-500 hover:bg-green-600");
        break;
      case "Unpaid":
        setStatusCSS("bg-red-500 hover:bg-red-600");
        break;
      case "Cancelled":
        setStatusCSS("bg-gray-500 hover:bg-gray-600");
        break;
      default:
        setStatusCSS("");
    }
  }, [data?.booking_payment_status]);

  return (
    <div className="w-[30vw] space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-black">Detail Pesanan</span>
        <div className={`w-min rounded-full px-4 py-1 text-white ${statusCSS}`}>
          {data?.booking_payment_status}
        </div>
      </div>
      <p className="text-black">
        Booking Code:{" "}
        <span className="font-bold text-[#7126B5]">{data?.booking_code}</span>
      </p>
      <div>
        <div className="m-0 flex justify-between">
          <span className="font-bold text-[#151515]">
            {data?.ticket.departure_time}
          </span>
          <span className="font-bold text-[#A06ECE]">Keberangkatan</span>
        </div>
        <div className="flex justify-between">
          <div className="text-[#151515]">
            <p>{data?.ticket.departure_date}</p>
            <p className="font-medium">
              {data?.ticket.flight_departure_airport_name}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between text-[#151515]">
          <div>
            <p className="font-bold">
              Jet Air - Economy {data?.airline_and_seat_class}
            </p>
            <p className="font-bold">{data?.ticket.flight_number}</p>
          </div>
        </div>
      </div>

      <div className="border-b py-4">
        <p className="mb-2 font-bold text-[#151515]">Informasi:</p>
        {data?.ticket.passengers.map((human, index) => (
          <>
            <div className="flex flex-col text-black">
              <span>
                Penumpang {index + 1}: {human[0].name}
              </span>
              <span>ID: {human[0].id}</span>
            </div>
          </>
        ))}
      </div>
      <div>
        <div className="flex justify-between">
          <span className="font-bold text-[#151515]">
            {data?.ticket.arrival_time}
          </span>
          <span className="font-bold text-[#A06ECE]">Kedatangan</span>
        </div>
        <div className="flex justify-between text-[#151515]">
          <div>
            <p>{data?.ticket.arrival_date}</p>
            <p className="font-medium">
              {data?.ticket.flight_arrival_airport_name}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="space-y-2 text-sm text-[#151515]">
          <p className="font-bold">Rincian Harga</p>
          <div className="flex justify-between">
            <span>{data?.passangers_total.adult} Adults</span>
            <span>IDR 9.550.000</span>
          </div>
          <div className="flex justify-between">
            <span>{data?.passangers_total.child} Child</span>
            <span>IDR 0</span>
          </div>
          <div className="flex justify-between">
            <span>{data?.passangers_total.baby} Baby</span>
            <span>IDR 0</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>IDR 0</span>
          </div>
          <div className="flex justify-between border-t pt-2 text-lg font-bold">
            <span className="text-[#151515]">Total</span>
            <span className="text-[#7126B5]">{data?.booking_amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFlight;
