import React, { useState } from "react";
import DateItem from "../../Elements/Date/DateItem";
import DateSeparator from "../../Elements/Date/DateSeparator";

const Date = () => {
  const [dates, setDates] = useState([
    { day: "Selasa", date: "01/03/2023", isActive: false },
    { day: "Rabu", date: "02/03/2023", isActive: false },
    { day: "Kamis", date: "03/03/2023", isActive: false },
    { day: "Jumat", date: "04/03/2023", isActive: false },
    { day: "Sabtu", date: "05/03/2023", isActive: false },
    { day: "Minggu", date: "06/03/2023", isActive: false },
    { day: "Senin", date: "07/03/2023", isActive: false },
    { day: "Selasa", date: "07/03/2023", isActive: false },
  ]);

  const handleSelect = (selectedIndex) => {
    setDates((prevDates) =>
      prevDates.map((item, index) => ({
        ...item,
        isActive: index === selectedIndex,
      })),
    );
  };

  return (
    <div className="scrollbar-hide flex gap-7 overflow-x-auto pb-4">
      {dates.map((item, index) => (
        <React.Fragment key={index}>
          <DateItem {...item} onClick={() => handleSelect(index)} />
          {index < dates.length - 1 && <DateSeparator />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Date;
