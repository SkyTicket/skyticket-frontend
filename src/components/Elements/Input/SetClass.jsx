import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import BoxSearch from "../Search/BoxSearch";

function SetClass({ close, setSeat, data }) {
  const [openClass, setOpenClass] = useState(null);
  const text = ["Economy", "Premium Economy", "Business", "First Class"];
  const text1 = ["Economy", "PremiumEconomy", "Business", "FirstClass"];

  const toggleClass = (id) => {
    setOpenClass(openClass === id ? null : id);
  };

  const handleSave = (x) => {
    setSeat(x);
    close();
  };

  const showNotif = (x) => {
    toast.error((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } pointer-events-auto flex w-full max-w-md items-center bg-white`}
      >
        <span className="flex text-sm">{x}</span>
        <FontAwesomeIcon
          icon={faXmark}
          className="h-6 w-6 cursor-pointer text-[#151515]"
          onClick={() => toast.dismiss(t.id)}
        />
      </div>
    ));
  };

  return (
    <BoxSearch
      save={() =>
        handleSave(data?.[openClass]?.input_value || text1[openClass])
      }
      closeHandler={close}
    >
      <div className="w-full select-none p-4 py-0">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`flex w-full items-center justify-between border-b-2 px-4 py-1 text-black ${
              data?.message == "notFilled"
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } ${openClass === index ? "bg-[#4B1979]" : ""}`}
            onClick={
              data?.message == "notFilled"
                ? () =>
                    showNotif(
                      "Please choose your destination city, arrival city and departure date first",
                    )
                : () => toggleClass(index)
            }
          >
            <div className="flex flex-col">
              <div
                className={`text-left font-medium ${
                  openClass === index ? "text-white" : ""
                }`}
              >
                {data?.[index]?.seat_class_type || text[index]}
              </div>
              <div
                className={`text-left font-medium ${
                  openClass === index ? "text-white" : "text-[#7126B5]"
                }`}
              >
                {data?.[index]?.seat_class_price || "IDR 0"}
              </div>
            </div>
            {openClass === index ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-5 w-5 text-green-600"
              />
            ) : null}
          </div>
        ))}
      </div>
    </BoxSearch>
  );
}

export default SetClass;
