import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import BoxSearch from "../Search/BoxSearch";

function SetClass({ close, setSeat }) {
  const [openClass, setOpenClass] = useState(null);
  const classType = ["Economy", "Premium Economy", "Business", "First Class"];
  const price = ["4.950.000", "7.550.000", "29.220.000", "87.620.000"];

  const toggleClass = (id) => {
    setOpenClass(openClass === id ? null : id);
  };

  const handleSave = (x) => {
    setSeat(x);
    close();
  };

  return (
    <BoxSearch
      save={() => handleSave(classType[openClass])}
      closeHandler={close}
    >
      <div className="w-full p-4 py-0">
        {classType.map((type, index) => (
          <div
            key={index}
            className={`flex w-full cursor-pointer items-center justify-between border-b-2 px-4 py-1 text-black ${
              openClass === index ? "bg-[#4B1979]" : ""
            }`}
            onClick={() => toggleClass(index)}
          >
            <div className={`flex flex-col`}>
              <div
                className={`text-left font-medium ${
                  openClass === index ? "text-white" : ""
                }`}
              >
                {type}
              </div>
              <div
                className={`text-left font-medium ${
                  openClass === index ? "text-white" : "text-[#7126B5]"
                }`}
              >
                IDR {price[index]}
              </div>
            </div>
            {openClass === index ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-5 w-5 text-green-600"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </BoxSearch>
  );
}
export default SetClass;
