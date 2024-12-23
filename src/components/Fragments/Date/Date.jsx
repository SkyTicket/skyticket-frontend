import React, { useState, useEffect } from "react";
import { format, addDays, isEqual, parse, parseISO } from "date-fns";
import { useLocation, useSearchParams } from "react-router-dom";
import DateItem from "../../Elements/Date/DateItem";
import DateSeparator from "../../Elements/Date/DateSeparator";
import idLocale from "date-fns/locale/id";

const DateSelector = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const selectedDepDate =
    searchParams.get("depDate") || location.state?.filters?.depDate;

  const generateDatesAround = (centerDate) => {
    const dates = [];
    const parsedCenterDate = centerDate ? parseISO(centerDate) : new Date();

    for (let i = -3; i <= 4; i++) {
      const currentDate = addDays(parsedCenterDate, i);
      dates.push({
        day: format(currentDate, "EEEE", { locale: idLocale }),
        date: format(currentDate, "dd/MM/yyyy"),
        fullDate: format(currentDate, "yyyy-MM-dd"),
        isActive: i === 0,
      });
    }
    return dates;
  };

  const [dates, setDates] = useState(generateDatesAround(selectedDepDate));

  useEffect(() => {
    if (selectedDepDate) {
      setDates(generateDatesAround(selectedDepDate));
    }
  }, [selectedDepDate]);

  const handleSelect = (selectedDate) => {
    setDates((prevDates) =>
      prevDates.map((item) => ({
        ...item,
        isActive: item.fullDate === selectedDate.fullDate,
      })),
    );

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("depDate", selectedDate.fullDate);
  };

  return (
    <div className="scrollbar-hide flex gap-4 overflow-x-auto py-2 pb-4 sm:flex-col sm:gap-4 md:flex-row md:gap-7">
      {dates.map((item, index) => (
        <React.Fragment key={index}>
          <DateItem
            {...item}
            onClick={() => handleSelect(item)}
            className={`bg-purple-600 bg-transparent px-6 py-2 text-sm transition-all duration-200 ease-in-out sm:text-base md:text-lg dark:bg-transparent dark:text-black ${
              item.isActive
                ? "bg-purple-400 text-white ring-2 ring-purple-500 focus:ring-purple-500 dark:bg-purple-400 dark:text-white"
                : "hover:bg-purple-400 hover:text-white"
            }`}
          />
          
        </React.Fragment>
      ))}
    </div>
  );
};

export default DateSelector;
