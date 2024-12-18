import React, { useState, useEffect } from "react";
import { format, addDays, parseISO } from "date-fns";
import DateItem from "../../Elements/Date/DateItem";
import DateSeparator from "../../Elements/Date/DateSeparator";
import idLocale from "date-fns/locale/id";

const DateSelector = ({  }) => {
  const today = new Date();
  const [filters, setFilters] = useState({
    depDate: "",
    arrDate: null,
  });
  const { depDate,arrDate } = location.state || {
    depDate: "",
    arrDate: null,
  };
  const generateInitialDates = () => {
    const initialDates = [];
    for (let i = 0; i < 8; i++) {
      const currentDate = addDays(today, i);
      initialDates.push({
        day: format(currentDate, "EEEE", { locale: idLocale }),
        date: format(currentDate, "dd/MM/yyyy"),
        isActive: false,
      });
    }
    return initialDates;
  };

  const [dates, setDates] = useState(generateInitialDates);

  useEffect(() => {
    if (depDate || arrDate) {
      setDates((prevDates) =>
        prevDates.map((item) => ({
          ...item,
          isActive: item.date === depDate || item.date === arrDate,
        })),
      );
    }
  }, [depDate, arrDate]);

  const handleSelect = (selectedIndex) => {
    setDates((prevDates) =>
      prevDates.map((item, index) => ({
        ...item,
        isActive: index === selectedIndex,
      })),
    );
  };
  const handleSubmit = async () => {
    const formattedDepDate = format(new Date(filters.depDate), "yyyy-MM-dd");
    const formattedArrDate = filters.arrDate
      ? format(new Date(filters.arrDate), "yyyy-MM-dd")
      : null;

    const response = await fetchFlights({
      ...filters,
      depDate: formattedDepDate,
      arrDate: formattedArrDate,
    });
  };
  return (
    <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4 sm:flex-col sm:gap-4 md:flex-row md:gap-7">
      {dates.map((item, index) => (
        <React.Fragment key={index}>
          <DateItem
            {...item}
            onClick={() => handleSelect(index)}
            className="px-4 py-2 text-sm sm:text-base md:text-lg"
          />
          {index < dates.length - 1 && (
            <DateSeparator
              depDate={filters.depDate}
              arrDate={filters.arrDate}
              className="hidden sm:block"
            />
          )}
        </React.Fragment>
      ))}

    </div>
  );
};

export default DateSelector;
