import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetFlight from "../../Elements/Accordion/DetailFlight";
import AccordionBox from "../../Elements/Accordion/AccordionBox";
import DetailFlight from "../DetailFlight";
import { Card, CardContent } from '../Card/CardDummy';
import { MapPin } from "lucide-react";
import { Clock } from "lucide-react";

function AccordionDummy() {

    const bookings = [
        {
          id: 1,
          status: 'issued',
          departureCity: 'Jakarta',
          departureDate: '5 Maret 2023',
          departureTime: '15:10',
          arrivalCity: 'Melbourne',
          arrivalDate: '5 Maret 2023',
          arrivalTime: '21:10',
          bookingCode: '6723y2GHK',
          class: 'Economy',
          price: 'IDR 9.850.000',
          duration: '4h 0m'
        },
        {
          id: 2,
          status: 'unpaid',
          departureCity: 'Jakarta',
          departureDate: '1 Maret 2023',
          departureTime: '07:00',
          arrivalCity: 'Bali',
          arrivalDate: '1 Maret 2023',
          arrivalTime: '08:15',
          bookingCode: '6795J2DOG',
          class: 'Business',
          price: 'IDR 3.250.000',
          duration: '1h 15m'
        },
        {
          id: 3,
          status: 'cancelled',
          departureCity: 'Jakarta',
          departureDate: '11 Feb 2023',
          departureTime: '07:00',
          arrivalCity: 'Medan',
          arrivalDate: '11 Feb 2023',
          arrivalTime: '08:15',
          bookingCode: '6GIU995567G',
          class: 'Economy',
          price: 'IDR 2.950.000',
          duration: '1h 15m'
        }
      ];
    
    const getStatusBadge = (status) => {
        const styles = {
          issued: 'bg-green-500 hover:bg-green-600',
          unpaid: 'bg-red-500 hover:bg-red-600',
          cancelled: 'bg-gray-500 hover:bg-gray-600'
        };
    }
    

  return (
    <div className="p-4 text-black w-[40vw] ">
        <h2 className="text-lg font-semibold mb-4">Maret 2023</h2>
        
        {/* Booking Cards */}
        {bookings.map(booking => (
          <Card key={booking.id} className=" border-[#7126B5] mb-4">
            <CardContent className="p-4">

              <div className=" ${styles[status]} flex justify-between items-start mb-4">
                {getStatusBadge(booking.status)}
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold">{booking.departureCity}</span>
                  </div>
                  <div className="text-sm text-gray-600 ml-6">
                    {booking.departureDate}
                  </div>
                  <div className="text-sm text-gray-600 ml-6">
                    {booking.departureTime}
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center">
                  <Clock className="w-4 h-4 text-gray-500 mb-1" />
                  <div className="text-sm text-gray-600">{booking.duration}</div>
                </div>

                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold">{booking.arrivalCity}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {booking.arrivalDate}
                  </div>
                  <div className="text-sm text-gray-600">
                    {booking.arrivalTime}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Booking Code:</div>
                  <div className="font-semibold">{booking.bookingCode}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Class:</div>
                  <div className="font-semibold">{booking.class}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Price:</div>
                  <div className="font-semibold">{booking.price}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

        );
}

export default AccordionDummy;
