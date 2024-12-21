import React, { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailFlight = ({ data, isMobile, onClose }) => {
  const [statusCSS, setStatusCSS] = useState("");

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
    <div className={`${isMobile ? "px-4 text-sm" : "w-[30vw]"} space-y-4 pt-4`}>
      {isMobile && (
        <>
          <div className="fixed left-0 top-0 z-[100] flex w-full items-center gap-4 bg-[#4B1979] p-3">
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={onClose}
              className="rotate-180 cursor-pointer text-white"
            />
            <p className="cursor-default select-none text-white">
              Rincian Penerbangan
            </p>
          </div>
          <div className="h-4 w-full"></div>
        </>
      )}

      <div className="flex items-center justify-between">
        {isMobile ? (
          ""
        ) : (
          <span className="text-lg font-bold text-black">Detail Pesanan</span>
        )}
        <div className={`w-min rounded-full px-4 py-1 text-white ${statusCSS}`}>
          {data?.booking_payment_status}
        </div>
      </div>

      <div
        className={`${isMobile ? "rounded-xl border border-gray-500 p-5" : ""}`}
      >
        <p className="text-black">
          Booking Code:{" "}
          <span className="font-bold text-[#7126B5]">{data?.booking_code}</span>
        </p>
        <div className="mb-3">
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

        <div className="flex items-center border-y before:border-0">
          <img src={data?.ticket.airline_logo} alt="logo" className="h-6" />
          <div>
            <div className="pt-3">
              <div className="flex items-center justify-between text-[#151515]">
                <div>
                  <p className="font-bold">Jet Air - {data?.seat_class_type}</p>
                  <p className="font-bold">{data?.ticket.flight_number}</p>
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="mb-2 font-bold text-[#151515]">Informasi:</p>
              {data?.ticket.passengers.map((human, index) => (
                <div key={index} className="flex flex-col text-black">
                  <span className="font-semibold text-[#4B1979]">
                    Penumpang {index + 1}: {human[0].name}
                  </span>
                  <span>ID: {human[0].id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3">
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
      </div>

      <div className="md:border-t md:pt-3">
        <div className="space-y-2 text-sm text-[#151515]">
          <p className="font-bold">Rincian Harga</p>
          {data?.ticket.amount_details.adults && (
            <div className="flex justify-between">
              <span>{data?.ticket.amount_details.adults}</span>
              <span>{data?.ticket.amount_details.adults_amount_total}</span>
            </div>
          )}
          {data?.ticket.amount_details.child && (
            <div className="flex justify-between">
              <span>{data?.ticket.amount_details.child}</span>
              <span>{data?.ticket.amount_details.child_amount_total}</span>
            </div>
          )}
          {data?.ticket.amount_details.baby && (
            <div className="flex justify-between">
              <span>{data?.ticket.amount_details.baby}</span>
              <span>{data?.ticket.amount_details.baby_amount_total}</span>
            </div>
          )}
          {data?.ticket.amount_details.tax && (
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{data?.ticket.amount_details.tax}</span>
            </div>
          )}
          <div className="flex justify-between border-t pt-2 text-lg font-bold">
            <span className="text-[#151515]">Total</span>
            <span className="text-[#7126B5]">{data?.booking_amount}</span>
          </div>
        </div>
      </div>
      <button
        className={`w-full text-white ${
          data?.booking_payment_status == "Issued"
            ? "bg-[#7126B5]"
            : data?.booking_payment_status == "Unpaid"
              ? "bg-[#FF0000]"
              : "bg-gray-500"
        }`}
      >
        {data?.booking_payment_status == "Issued"
          ? "Cetak Tiket"
          : data?.booking_payment_status == "Unpaid"
            ? "Lanjut Bayar"
            : "Cari Penerbangan"}
      </button>
      {isMobile && <div className="h-4 w-full"></div>}
    </div>
  );
};

export default DetailFlight;
