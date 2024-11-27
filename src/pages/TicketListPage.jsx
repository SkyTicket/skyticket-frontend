import { useState } from "react";
import Button from "../components/Elements/Button/Button";
import Input from "../components/Elements/Button/Input";
import DateItem from "../components/Fragments/Date/DateItem";
import FilterItem from "../components/Fragments/Filter/FilterItem";
import FlightInfo from "../components/Fragments/FlightInfo";
import DateSeparator from "../components/Fragments/Date/DateSeparator";
import React from "react";
import FilterButton from "../components/Elements/Button/FilterButton";
import FilterModal from "../components/Fragments/Filter/FilterModals";
import LoadingAnimation from "../components/Fragments/Loader/LoadingAnimation";

const TicketListPage = () => {
  const dates = [
    { day: "Selasa", date: "01/03/2023", isActive: false },
    { day: "Rabu", date: "02/03/2023", isActive: true },
    { day: "Kamis", date: "03/03/2023", isActive: false },
    { day: "Jumat", date: "04/03/2023", isActive: false },
    { day: "Sabtu", date: "05/03/2023", isActive: false },
    { day: "Minggu", date: "06/03/2023", isActive: false },
    { day: "Senin", date: "07/03/2023", isActive: false },
    { day: "Selasa", date: "07/03/2023", isActive: false },
  ];

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleFilterSelect = (filter) => {
    console.log("Filter selected:", filter);
    setIsFilterModalOpen(false);
  };

  return (
    <div className=" max-w-7xl mx-auto px-4 py-6">
      <p className="text-2xl font-semibold py-6">Pilih Penerbangan</p>
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="w-full flex items-center justify-between bg-purple-500 text-white rounded-xl px-4 py-2">
          <FlightInfo />
        </div>
        <Button className="w-1/6 h-14 rounded-xl font-semibold bg-green-500 hover:bg-green-400">
          Ubah Pencarian
        </Button>
      </div>
      <div className="flex justify-end mb-6 "></div>

      {/* Date */}
      <div className=" flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {dates.map((item, index) => (
          <React.Fragment key={index}>
            <DateItem {...item} />
            {index < dates.length - 1 && <DateSeparator />}
          </React.Fragment>
        ))}
      </div>

      {/* Filter Modals */}
      <div className="flex justify-end mb-4">
        <FilterButton onClick={() => setIsFilterModalOpen(true)} />
      </div>
      {isFilterModalOpen && <FilterModal onFilterSelect={handleFilterSelect} />}

      {/* Body */}
      <div className="grid md:grid-cols-[300px,1fr] gap-6 mt-6">
        <aside>
          <div className="bg-white rounded-lg shadow-lg p-3">
            <div className="mb-1">
              <h3 className="text-lg font-medium pt-3 ml-4">Filter</h3>
            </div>
            <div className="divide-y">
              <FilterItem
                icon={
                  <img
                    src="/src/assets/icons/fi_box.svg"
                    alt="Transit Icon"
                    className="w-5 h-5"
                  />
                }
                label="Transit"
              />
              <FilterItem
                icon={
                  <img
                    src="/src/assets/icons/fi_heart.svg"
                    alt="Transit Icon"
                    className="w-5 h-5"
                  />
                }
                label="Fasilitas"
              />
              <FilterItem
                icon={
                  <img
                    src="/src/assets/icons/fi_dollar-sign.svg"
                    alt="Transit Icon"
                    className="w-5 h-5"
                  />
                }
                label="Harga"
              />
            </div>
          </div>
        </aside>
        {/* Loading bar */}
        <LoadingAnimation />
      </div>
    </div>
  );
};

export default TicketListPage;
