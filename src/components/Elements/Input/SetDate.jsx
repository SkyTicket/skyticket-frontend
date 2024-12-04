import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ disable }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <Datepicker
      displayFormat="DD/MM/YYYY"
      primaryColor={"purple"}
      placeholder="Pilih Tanggal"
      containerClassName="block"
      toggleClassName="hidden"
      inputClassName={`${
        disable ? "cursor-not-allowed" : "cursor-pointer"
      } text-black bg-white font-medium border-b border-gray-500 w-36 py-2 focus:outline-none focus:border-slate-400 placeholder-gray-300`}
      readOnly={true}
      useRange={false}
      asSingle={true}
      value={disable ? "" : value}
      onChange={(newValue) => setValue(newValue)}
      disabled={disable}
    />
  );
};

export default DatePicker;
