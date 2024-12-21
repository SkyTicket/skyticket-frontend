import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { Card, CardContent } from "../Card/CardDummy";

function AccordionDummy({ onClick }) {
  const bookings = [
    {
      id: 1,
      status: "issued",
      departureCity: "Jakarta",
      departureDate: "5 Maret 2023",
      departureTime: "15:10",
      arrivalCity: "Melbourne",
      arrivalDate: "5 Maret 2023",
      arrivalTime: "21:10",
      bookingCode: "6723y2GHK",
      class: "Economy",
      price: "IDR 9.850.000",
      duration: "4h 0m",
    },
    {
      id: 2,
      status: "unpaid",
      departureCity: "Jakarta",
      departureDate: "1 Maret 2023",
      departureTime: "07:00",
      arrivalCity: "Bali",
      arrivalDate: "1 Maret 2023",
      arrivalTime: "08:15",
      bookingCode: "6795J2DOG",
      class: "Business",
      price: "IDR 3.250.000",
      duration: "1h 15m",
    },
    {
      id: 3,
      status: "cancelled",
      departureCity: "Jakarta",
      departureDate: "11 Feb 2023",
      departureTime: "07:00",
      arrivalCity: "Medan",
      arrivalDate: "11 Feb 2023",
      arrivalTime: "08:15",
      bookingCode: "6GIU995567G",
      class: "Economy",
      price: "IDR 2.950.000",
      duration: "1h 15m",
    },
  ];

  function getStatusBadge(stat) {
    switch (stat) {
      case "issued":
        return "bg-green-500 hover:bg-green-600";
      case "unpaid":
        return "bg-red-500 hover:bg-red-600";
      case "cancelled":
        return "bg-gray-500 hover:bg-gray-600";
      default:
        return "";
    }
  }

  return (
    <div className="w-[40vw] p-4 text-black">
      <h2 className="mb-4 text-lg font-semibold">Maret 2023</h2>

      {bookings.map((booking) => {
        const computedStatus = getStatusBadge(booking.status);
        return (
          <Card
            key={booking.id}
            className="mb-4 border-[#7126B5]"
            onClick={() => onClick(booking)}
          >
            <CardContent className="p-4">
              <div
                className={`my-4 flex w-min items-start justify-between rounded-full px-4 py-1 text-white ${computedStatus}`}
              >
                {booking.status}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="mt-1 size-5"
                  />
                  <div className="ml-2 flex w-max flex-col">
                    <span className="font-semibold">
                      {booking.departureCity}
                    </span>
                    <span className="text-sm text-gray-600">
                      {booking.departureDate}
                    </span>
                    <span className="text-sm text-gray-600">
                      {booking.departureTime}
                    </span>
                  </div>
                </div>

                <div className="mx-2 mb-4 flex w-full flex-col items-center">
                  <div className="text-sm text-gray-600">
                    {booking.duration}
                  </div>
                  <div className="flex w-full items-center">
                    <div className="h-0.5 w-full bg-gray-500" />
                    <div className="h-1 w-1 -translate-x-1 rotate-45 border-r border-t border-gray-500" />
                  </div>
                </div>

                <div className="flex">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="mt-1 size-5"
                  />
                  <div className="ml-2 flex w-max flex-col">
                    <span className="font-semibold">{booking.arrivalCity}</span>
                    <span className="text-sm text-gray-600">
                      {booking.arrivalDate}
                    </span>
                    <span className="text-sm text-gray-600">
                      {booking.arrivalTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <div>
                  <div className="font-semibold text-black">Booking Code:</div>
                  <div className="text-sm">{booking.bookingCode}</div>
                </div>
                <div>
                  <div className="font-semibold text-black">Class:</div>
                  <div className="text-sm">{booking.class}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-[#4B1979]">
                    {booking.price}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default AccordionDummy;
