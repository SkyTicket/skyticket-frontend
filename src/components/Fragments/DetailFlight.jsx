import React from "react";

const DetailFlight = (props) => {
  return (
    <div className="space-y-4">
      <div className="m-0 flex justify-between">
        <span className="font-bold">07:00</span>
        <span className="text-purple-600">Keberangkatan</span>
      </div>
      <div className="flex justify-between">
        <div>
          <p>27 November 2024</p>
          <p>Soekarno-Hatta - Terminal 1A Domestik</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">Jet Air - Economy</p>
            <p className="font-bold">JT - 203</p>
          </div>
        </div>
      </div>

      <div className="border-b py-4">
        <p className="mb-2 font-bold">Informasi:</p>
        <ul className="space-y-1 text-gray-600">
          <li>Baggage 20 kg</li>
          <li>Cabin baggage 7 kg</li>
          <li>In Flight Entertainment</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <span className="font-bold">11:00</span>
        <span className="text-purple-600">Kedatangan</span>
      </div>
      <div className="flex justify-between">
        <div>
          <p>27 November 2024</p>
          <p>Melbourne International Airport</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="space-y-2 text-sm">
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
          <div className="flex justify-between border-t pt-2 text-lg font-bold text-purple-600">
            <span>Total</span>
            <span>IDR 9.850.000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFlight;
