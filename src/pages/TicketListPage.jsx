import React, { useState } from "react";
import Button from "../components/Elements/Button/Button";
import FilterButton from "../components/Elements/Button/FilterButton";
import DateList from "../components/Elements/Date/DateList";
import FilterItem from "../components/Fragments/Filter/FilterItem";
import FilterModal from "../components/Fragments/Filter/FilterModals";
import FlightInfo from "../components/Fragments/FlightInfo";
import LoadingAnimation from "../components/Fragments/Loader/LoadingAnimation";

const TicketListPage = ({ image }) => {
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
        <div className="w-full flex items-center justify-between bg-[#A06ECE] text-white rounded-xl px-4 py-2">
          <FlightInfo />
        </div>
        <Button className="w-1/3 h-14 rounded-xl font-semibold bg-[#73CA5C] hover:bg-white  hover:text-[#73CA5C] hover:border-2 border-[#73CA5C]">
          Ubah Pencarian
        </Button>
      </div>
      <div className="flex justify-end mb-6 "></div>

      {/* Date */}
      <DateList />

      {/* Filter Modals */}
      <div className="flex pt-7 justify-end mb-4">
        <FilterButton onClick={() => setIsFilterModalOpen(true)} />
      </div>
      {isFilterModalOpen && <FilterModal onFilterSelect={handleFilterSelect} />}

      {/* Body */}
      <div className=" grid md:grid-cols-[300px,1fr] gap-10 mt-6">
        <aside>
          <div className="bg-white rounded-lg shadow-lg p-3">
            <div className="mb-2">
              <h3 className="text-lg font-medium pt-2 pl-4">Filter</h3>
            </div>

            {/* Daftar Filter */}
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
                    alt="Fasilitas Icon"
                    className="w-5 h-5"
                  />
                }
                label="Fasilitas"
              />
              <FilterItem
                icon={
                  <img
                    src="/src/assets/icons/fi_dollar-sign.svg"
                    alt="Harga Icon"
                    className="w-5 h-5"
                  />
                }
                label="Harga"
              />
            </div>
          </div>
        </aside>

        {/* Loading bar */}
        <div>
          {isLoading ? (
            <div className="flex flex-col items-center">
              <LoadingAnimation />
              <p className="text-black text-lg mt-4">Loading...</p>
            </div>
          ) : data ? (
            <div>
              {" "}
              {data.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/icons/notfound.svg"
                alt="Data Not Found"
                className="w-64 h-64"
              />
              <p className="text-black text-lg mt-4">
                Maaf, pencarian Anda tidak ditemukan
              </p>
              <p className="text-[#7126B5] text-lg mt-4">
                Coba cari perjalanan lainya!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketListPage;
