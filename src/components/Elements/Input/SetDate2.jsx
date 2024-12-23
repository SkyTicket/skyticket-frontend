import { useState } from "react";
import Calendar from "react-calendar/dist/cjs/Calendar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Backdrop from "../Search/Backdrop";

function SetDate2({ onClick, onClose, isMobile }) {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    setValue(date);
    const formattedDate = date.toLocaleDateString("en-CA");
    onClick(formattedDate);
  };

  return (
    <>
      <Backdrop />
      <div
        className={`fixed z-50 border bg-white p-6 ${
          isMobile
            ? "bottom-0 left-0 right-0 h-[80vh] min-h-[390px] rounded-t-xl"
            : "left-[35vw] top-[17vh] h-[66vh] w-[30vw] rounded-xl"
        }`}
      >
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="size-6 cursor-pointer text-[#151515]"
            onClick={onClose}
          />
        </div>
        <Calendar
          onChange={handleDateChange}
          value={value}
          className={"custom-calendar"}
          showNeighboringMonth={false}
        />
      </div>
    </>
  );
}

export default SetDate2;
