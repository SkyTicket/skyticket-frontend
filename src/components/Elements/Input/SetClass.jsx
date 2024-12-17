import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import BoxSearch from "../Search/BoxSearch";

function SetClass({ close, setSeat, data }) {
  const [openClass, setOpenClass] = useState(null);

  const toggleClass = (id) => {
    setOpenClass(openClass === id ? null : id);
  };

  const handleSave = (x) => {
    setSeat(x);
    close();
  };

  return (
    <BoxSearch
      save={() => handleSave(data[openClass].input_value)}
      closeHandler={close}
    >
      <div className="w-full p-4 py-0">
        {data?.map((type, index) => (
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
                {type.seat_class_type}
              </div>
              <div
                className={`text-left font-medium ${
                  openClass === index ? "text-white" : "text-[#7126B5]"
                }`}
              >
                {type.seat_class_price}
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
