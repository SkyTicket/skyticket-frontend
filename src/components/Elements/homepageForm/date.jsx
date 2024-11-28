import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <Datepicker
      displayFormat="DD/MM/YYYY"
      primaryColor={"purple"}
      placeholder="Pilih Tanggal"
      toggleClassName="hidden"
      inputClassName="border-b border-gray-500 w-36 pb-2 cursor-pointer focus:outline-none focus:border-slate-400 placeholder-gray-300"
      readOnly={true}
      useRange={false}
      asSingle={true}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export default DatePicker;
