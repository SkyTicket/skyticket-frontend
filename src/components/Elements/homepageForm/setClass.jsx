import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import BoxSearch from "../search/boxSearch";

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
            className={`flex w-full justify-between border-b-2 py-1 items-center px-4 cursor-pointer ${
              openClass === index ? "bg-purple-800" : ""
            }`}
            onClick={() => toggleClass(index)}
          >
            <div className={`flex flex-col `}>
              <div
                className={`text-left font-bold ${
                  openClass === index ? "text-white" : ""
                }`}
              >
                {type}
              </div>
              <div
                className={`text-left font-semibold ${
                  openClass === index ? "text-white" : "text-purple-700"
                }`}
              >
                IDR {price[index]}
              </div>
            </div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-600 w-5 h-5"
            />
          </div>
        ))}
      </div>
    </BoxSearch>
  );
}
export default SetClass;
