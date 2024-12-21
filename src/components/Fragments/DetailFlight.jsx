import React, { useEffect, useState } from "react";

const DetailFlight = ({ data }) => {
  const [statusCSS, setStatusCSS] = useState("");

  useEffect(() => {
    switch (data?.status) {
      case "issued":
        setStatusCSS("bg-green-500 hover:bg-green-600");
        break;
      case "unpaid":
        setStatusCSS("bg-red-500 hover:bg-red-600");
        break;
      case "cancelled":
        setStatusCSS("bg-gray-500 hover:bg-gray-600");
        break;
      default:
        setStatusCSS("");
    }
    console.log(statusCSS);
  }, [data?.status]);

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-black">Detail Pesanan</span>
        <div className={`w-min rounded-full px-4 py-1 text-white ${statusCSS}`}>
          {data?.status}
        </div>
      </div>
      <p className="text-black">
        Booking Code:{" "}
        <span className="font-bold text-[#7126B5]">{data?.bookingCode}</span>
      </p>
      <div>
        <div className="m-0 flex justify-between">
          <span className="font-bold text-[#151515]">
            {data?.departureTime}
          </span>
          <span className="font-bold text-[#A06ECE]">Keberangkatan</span>
        </div>
        <div className="flex justify-between">
          <div className="text-[#151515]">
            <p>{data?.departureDate}</p>
            <p className="font-medium">Soekarno Hatta - Terminal 1A Domestik</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between text-[#151515]">
          <div>
            <p className="font-bold">Jet Air - Economy</p>
            <p className="font-bold">JT - 203</p>
          </div>
        </div>
      </div>

      <div className="border-b py-4">
        <p className="mb-2 font-bold text-[#151515]">Informasi:</p>
        <ul className="space-y-1 text-[#151515]">
          <li>Baggage 20 kg</li>
          <li>Cabin baggage 7 kg</li>
          <li>In Flight Entertainment</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-between">
          <span className="font-bold text-[#151515]">{data?.arrivalTime}</span>
          <span className="font-bold text-[#A06ECE]">Kedatangan</span>
        </div>
        <div className="flex justify-between text-[#151515]">
          <div>
            <p>{data?.arrivalDate}</p>
            <p className="font-medium">Soekarno Hatta - Terminal 1A Domestik</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="space-y-2 text-sm text-[#151515]">
          <p className="font-bold">Rincian Harga</p>
          <div className="flex justify-between">
            <span>2 Adults</span>
            <span>IDR 9.550.000</span>
          </div>
          <div className="flex justify-between">
            <span>1 Baby</span>
            <span>IDR 0</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>IDR 300.000</span>
          </div>
          <div className="flex justify-between border-t pt-2 text-lg font-bold">
            <span className="text-[#151515]">Total</span>
            <span className="text-[#7126B5]">IDR 9.850.000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFlight;
