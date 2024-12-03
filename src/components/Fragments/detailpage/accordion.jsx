import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetFlight from "../../elements/detailPage/detailFlight";
import AccordionBox from "../../Elements/detailPage/accordionBox";
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
    <div className="md:w-[55vw] md:m-0 w-[90vw] m-[5vw] max-w-2xl mx-auto">
      {data.map((data) => (
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
