import React from "react";
import Date from "../../Fragments/Date/Date";

const DateList = () => {
  return (
    <div className="border-b-4">
      <div className="flex overflow-x-auto pb-4 pt-6 md:px-4 sm:px-2 flex-wrap sm:flex-col md:flex-row">
        <Date />
      </div>
    </div>
  );
};

export default DateList;
