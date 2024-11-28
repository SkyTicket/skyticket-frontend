import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetFlight from "../../elements/detailPage/detailFlight";
import AccordionBox from "../../elements/detailPage/accordionBox";
import "./accordion.css";

function Accordion() {
  const flights = [
    {
      id: 1,
      departureTime: "07:00",
      departureCity: "Jakarta",
      departureCityShort: "JKT",
      departureDate: "3 Maret 2023",
      arrivalTime: "11:00",
      arrivalCity: "Melbourne",
      arrivalCityShort: "MLB",
      arrivalDate: "3 Maret 2023",
      duration: "4h 0m",
      price: "IDR 4.950.000",
      departure: "Soekarno Hatta - Terminal 1A Domestik",
      flightNumber: "JT - 203",
      baggage: "20 kg",
      cabin: "7 kg",
      entertainment: "In-Flight Entertainment",
      arrival: "Melbourne International Airport",
      airLineLogo: "/logoAirline.png",
    },
    {
      id: 2,
      departureTime: "08:00",
      departureCity: "Jakarta",
      departureCityShort: "JKT",
      departureDate: "3 Maret 2023",
      arrivalTime: "12:00",
      arrivalCity: "Melbourne",
      arrivalCityShort: "MLB",
      arrivalDate: "3 Maret 2023",
      duration: "4h 0m",
      price: "IDR 5.950.000",
      departure: "Soekarno Hatta - Terminal 1A Domestik",
      flightNumber: "JT - 204",
      baggage: "20 kg",
      cabin: "7 kg",
      entertainment: "In-Flight Entertainment",
      arrival: "Melbourne International Airport",
      airLineLogo: "/logoAirline.png",
    },
    {
      id: 3,
      departureTime: "13:15",
      departureCity: "Jakarta",
      departureCityShort: "JKT",
      departureDate: "3 Maret 2023",
      arrivalTime: "17:15",
      arrivalCity: "Melbourne",
      arrivalCityShort: "MLB",
      arrivalDate: "3 Maret 2023",
      duration: "4h 0m",
      price: "IDR 5.950.000",
      departure: "Soekarno Hatta - Terminal 1A Domestik",
      flightNumber: "JT - 204",
      baggage: "20 kg",
      cabin: "7 kg",
      entertainment: "In-Flight Entertainment",
      arrival: "Melbourne International Airport",
      airLineLogo: "/logoAirline.png",
    },
    {
      id: 4,
      departureTime: "20:15",
      departureCity: "Jakarta",
      departureCityShort: "JKT",
      departureDate: "3 Maret 2023",
      arrivalTime: "23:30",
      arrivalCity: "Melbourne",
      arrivalCityShort: "MLB",
      arrivalDate: "3 Maret 2023",
      duration: "3h 15m",
      price: "IDR 5.950.000",
      departure: "Soekarno Hatta - Terminal 1A Domestik",
      flightNumber: "JT - 204",
      baggage: "20 kg",
      cabin: "7 kg",
      entertainment: "In-Flight Entertainment",
      arrival: "Melbourne International Airport",
      airLineLogo: "/logoAirline.png",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 500);
    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const clickHandler = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="md:w-[45.5vw] md:m-0 w-[90vw] m-[5vw] max-w-2xl mx-auto">
      {flights.map((data) => (
        <div
          key={data.id}
          className={`border-2 rounded-lg mb-4 shadow-lg overflow-hidden ${
            openAccordion === data.id ? "border-purple-400" : "border-gray-300"
          }`}
        >
          <AccordionBox
            onclickHandler={
              isMobile
                ? () =>
                    navigate("/detailPenerbangan", {
                      state: { flight: data },
                    })
                : () => clickHandler(data.id)
            }
            flight={data}
            isOpen={openAccordion}
          />

          {!isMobile && (
            <div
              className={`accordion-content p-4 pt-0 hidden md:block ${
                openAccordion === data.id ? "open" : "closed"
              }`}
            >
              <div className="m-6 flex gap-2 flex-col">
                <h3 className="text-purple-800 font-bold text-left">
                  Detail Penerbangan
                </h3>
              </div>
              <DetFlight flight={data} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
