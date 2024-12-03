import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetFlight from "../../elements/detailPage/detailFlight";
import AccordionBox from "../../elements/detailPage/accordionBox";
import "./accordion.css";

function Accordion({ data }) {
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
    <div className="m-[5vw] mx-auto w-[90vw] max-w-2xl md:m-0 md:w-[55vw]">
      {data.map((data) => (
        <div
          key={data.id}
          className={`mb-4 overflow-hidden rounded-lg border-2 shadow-lg ${
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
              className={`hidden max-h-0 overflow-hidden p-4 pt-0 transition-[max-height,padding] duration-300 ease-out md:block ${
                openAccordion === data.id ? "max-h-[500px]" : "p-0"
              }`}
            >
              <div className="m-6 flex flex-col gap-2">
                <h3 className="text-left font-bold text-purple-800">
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
