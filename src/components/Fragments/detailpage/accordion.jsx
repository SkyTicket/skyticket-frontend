import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetFlight from "../../Elements/Accordion/DetailFlight";
import AccordionBox from "../../Elements/Accordion/AccordionBox";

function Accordion({ data }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const listData = data.flights_data;

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
    <div className="m-[5vw] mx-auto w-[90vw] max-w-4xl md:m-0 md:w-[70vw]">
      {listData.map((data) => (
        <div
          key={data.flight_id}
          className={`mb-4 overflow-hidden rounded-lg border-2 shadow-lg ${
            openAccordion === data.flight_id
              ? "border-purple-400"
              : "border-gray-300"
          }`}
        >
          <AccordionBox
            onclickHandler={
              isMobile
                ? () =>
                    navigate("/detailPenerbangan", {
                      state: { flight: data },
                    })
                : () => clickHandler(data.flight_id)
            }
            flight={data}
            isOpen={openAccordion}
          />

          {!isMobile && (
            <div
              className={`block overflow-hidden pt-0 transition-all duration-500 ease-out ${
                openAccordion === data.flight_id
                  ? "max-h-[500px] p-6"
                  : "max-h-0 p-0"
              }`}
            >
              <div className="m-6 flex flex-col gap-2">
                <h3 className="text-left font-bold text-purple-800">
                  Detail Penerbangan
                </h3>
              </div>
              <DetFlight flight={data.flight_details} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
