import { useState } from "react";
import Calendar from "react-calendar/dist/cjs/Calendar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Backdrop from "../Search/Backdrop";

function SetDate2({ onClick, onClose }) {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    setValue(date);
    const formattedDate = date.toLocaleDateString("en-CA");
    onClick(formattedDate);
  };

  return (
    <>
      <Backdrop />
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[80vh] rounded-t-xl border bg-white p-6">
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
