import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { Card, CardContent } from "../Card/CardDummy";

function AccordionOrder({ data, onClick, isMobile, openFilter, openSearch }) {
  const [months, setMonths] = useState(null);
  const [openHistory, setOpenHistory] = useState(null);

  useEffect(() => {
    if (data) {
      setMonths(Object.keys(data));
    }
  }, [data]);

  function getStatusBadge(stat) {
    switch (stat) {
      case "Issued":
        return "bg-green-500 hover:bg-green-600";
      case "Unpaid":
        return "bg-red-500 hover:bg-red-600";
      case "Cancelled":
        return "bg-gray-500 hover:bg-gray-600";
      default:
        return "";
    }
  }

  const clickOpenHistoryHandler = (newValue, id) => {
    onClick(openHistory === id ? null : newValue);
    setOpenHistory(openHistory === id ? null : id);
  };

  return (
    <>
      {months?.map((history, index) => (
        <div
          key={history}
          className={`text-black ${
            isMobile
              ? "w-[100vw] bg-gradient-to-b from-[#DEC9FF] from-40% to-[#FFE9CA00] px-[5vw] pt-4"
              : "w-[40vw] p-4"
          }`}
        >
          {isMobile && index == 0 && (
            <div className="mb-4 flex items-center justify-between">
              <p className="text-2xl font-semibold text-black">
                Riwayat Pesanan
              </p>
              <FontAwesomeIcon
                icon={faSearch}
                className="size-5"
                onClick={openSearch}
              />
            </div>
          )}

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{history}</h2>
            {isMobile && index == 0 && (
              <button
                onClick={openFilter}
                className="flex h-fit items-center gap-1 rounded-full border border-[#D0D0D0] bg-white p-1 px-3 text-[#8A8A8A] hover:bg-[#f6edff]"
              >
                <FontAwesomeIcon icon={faFilter} />
                <span className="text-sm text-black">Filter</span>
              </button>
            )}
          </div>

          {data[history]?.map((booking, index) => {
            const computedStatus = getStatusBadge(
              booking.booking_payment_status,
            );
            return (
              <Card
                key={index}
                className={`mb-4 border-[#7126B5] ${
                  openHistory === `${history}-${index}`
                    ? "border-purple-400"
                    : "border-gray-300"
                }`}
                onClick={() =>
                  clickOpenHistoryHandler(booking, `${history}-${index}`)
                }
              >
                <CardContent className="p-3">
                  <div
                    className={`mb-4 flex w-min items-start justify-between rounded-full px-4 py-1 text-white ${computedStatus}`}
                  >
                    {booking.booking_payment_status}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mt-1 size-4 md:size-5"
                      />
                      <div className="ml-2 flex w-max flex-col">
                        <span className="text-sm font-semibold md:text-base">
                          {booking.departure_airport_city}
                        </span>
                        <span className="text-xs text-gray-600 md:text-sm">
                          {booking.ticket.departure_date}
                        </span>
                        <span className="text-xs text-gray-600 md:text-sm">
                          {booking.ticket.departure_time}
                        </span>
                      </div>
                    </div>

                    <div className="mx-2 mb-4 flex w-full flex-col items-center">
                      <div className="text-xs text-gray-600 md:text-sm">
                        {booking.flight_duration}
                      </div>
                      <div className="flex w-full items-center">
                        <div className="h-0.5 w-full bg-gray-500" />
                        <div className="h-1 w-1 -translate-x-1 rotate-45 border-r border-t border-gray-500" />
                      </div>
                    </div>

                    <div className="flex">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mt-1 size-4 md:size-5"
                      />
                      <div className="ml-2 flex w-max flex-col">
                        <span className="text-sm font-semibold md:text-base">
                          {booking.arrival_airport_city}
                        </span>
                        <span className="text-xs text-gray-600 md:text-sm">
                          {booking.ticket.arrival_date}
                        </span>
                        <span className="text-xs text-gray-600 md:text-sm">
                          {booking.ticket.arrival_time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <div>
                      <div className="text-sm font-semibold text-black md:text-base">
                        Booking Code:
                      </div>
                      <div className="text-xs md:text-sm">
                        {booking.booking_code}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black md:text-base">
                        Class:
                      </div>
                      <div className="text-xs md:text-sm">
                        {booking.seat_class_type}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-[#4B1979] md:text-base">
                        {booking.booking_amount}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ))}
      <div className="h-5"></div>
    </>
  );
}

export default AccordionOrder;
