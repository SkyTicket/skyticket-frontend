import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ disable, change }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleChange = (newValue) => {
    const date = newValue.startDate;
    const formattedDate = date.toISOString().split("T")[0];
    change(formattedDate);
    setValue(newValue);
  };

  return (
    <Datepicker
      primaryColor={"purple"}
      placeholder="Pilih Tanggal"
      containerClassName="block"
      popoverDirection="down"
      toggleClassName="hidden"
      inputClassName={`${
        disable ? "cursor-not-allowed" : "cursor-pointer"
      } text-black bg-white font-medium border-b border-gray-500 w-36 py-2 focus:outline-none focus:border-slate-400 placeholder-gray-300`}
      readOnly={true}
      useRange={false}
      asSingle={true}
      value={disable ? "" : value}
      onChange={handleChange}
      disabled={disable}
    />
  );
};

export default DatePicker;
