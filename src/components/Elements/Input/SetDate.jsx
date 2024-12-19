import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ disable, change, valueCard }) => {
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

  useEffect(() => {
    setValue({
      startDate: valueCard,
      endDate: valueCard,
    });
  }, [valueCard]);

  useEffect(() => {
    if (disable) {
      setValue({
        startDate: null,
        endDate: null,
      });
    }
  }, [disable]);

  return (
    <Datepicker
      primaryColor={"purple"}
      placeholder="Pilih Tanggal"
      containerClassName="block"
      popoverDirection="down"
      toggleClassName="hidden"
      inputClassName={`${
        disable ? "cursor-not-allowed" : "cursor-pointer"
      } text-black bg-white font-medium border-b-2 border-[#D0D0D0] w-[30vw] lg:w-[150px] py-2 focus:outline-none placeholder-gray-300`}
      readOnly={true}
      useRange={false}
      asSingle={true}
      value={value}
      onChange={handleChange}
      disabled={disable}
    />
  );
};

export default DatePicker;
