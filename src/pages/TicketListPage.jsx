import React, { useState, useEffect } from "react";
import Button from "../components/Elements/Button/Button";
import FilterButton from "../components/Elements/Button/FilterButton";
import DateList from "../components/Elements/Date/DateList";
import FilterItem from "../components/Fragments/Filter/FilterItem";
import FilterModal from "../components/Fragments/Filter/FilterModals";
import FlightInfo from "../components/Elements/Header/FlightInfo";
import LoadingAnimation from "../components/Fragments/Loader/LoadingAnimation";
import Accordion from "../components/Fragments/detailpage/accordion";
import Navbar from "../components/Fragments/Navbar/Navbar";

const TicketListPage = ({ data }) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleFilterSelect = (filter) => {
    console.log("Filter selected:", filter);
    setIsFilterModalOpen(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-6">
        <p className="py-6 text-2xl font-semibold text-black">
          Pilih Penerbangan
        </p>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex w-full items-center justify-between rounded-xl bg-[#A06ECE] px-4 py-2 text-white">
            <FlightInfo />
          </div>
          <Button className="h-14 w-1/3 rounded-xl border-[#73CA5C] bg-[#73CA5C] font-semibold hover:border-2 hover:bg-white hover:text-[#73CA5C]">
            Ubah Pencarian
          </Button>
        </div>
        <div className="mb-6 flex justify-end"></div>

        {/* Date */}
        <DateList />

        {/* Filter Modals */}
        <div className="mb-4 flex justify-end pt-7">
          <FilterButton onClick={() => setIsFilterModalOpen(true)} />
        </div>
        {isFilterModalOpen && (
          <FilterModal onFilterSelect={handleFilterSelect} />
        )}

        {/* Body */}
        <div className="flex justify-center">
          <div className="mt-6 flex w-full justify-between">
            <aside className="w-[300px] text-black">
              <div className="rounded-lg bg-white p-3 shadow-lg">
                <div className="mb-2">
                  <h3 className="pl-4 pt-2 text-lg font-medium">Filter</h3>
                </div>

                {/* Daftar Filter */}
                <div className="divide-y">
                  <FilterItem
                    label="Transit"
                    icon={
                      <img
                        src="/src/assets/icons/fi_box.svg"
                        alt="Transit Icon"
                        className="h-5 w-5"
                      />
                    }
                  />
                  <FilterItem
                    icon={
                      <img
                        src="/src/assets/icons/fi_heart.svg"
                        alt="Fasilitas Icon"
                        className="h-5 w-5"
                      />
                    }
                    label="Fasilitas"
                  />
                  <FilterItem
                    icon={
                      <img
                        src="/src/assets/icons/fi_dollar-sign.svg"
                        alt="Harga Icon"
                        className="h-5 w-5"
                      />
                    }
                    label="Harga"
                  />
                </div>
              </div>
            </aside>

            {/* Loading bar */}
            <div className="flex min-w-[70%] justify-center">
              {isLoading ? (
                <div className="flex flex-col items-center">
                  <LoadingAnimation />
                  <img src=""></img>
                </div>
              ) : data ? (
                <Accordion data={data} />
              ) : (
                <div className="flex flex-col items-center">
                  <img
                    src="/src/assets/icons/notfound.svg"
                    alt="Data Not Found"
                    className="h-64 w-64"
                  />
                  <p className="mt-4 text-lg text-black">
                    Maaf, pencarian Anda tidak ditemukan
                  </p>
                  <p className="mt-4 text-lg text-[#7126B5]">
                    Coba cari perjalanan lainya!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketListPage;
