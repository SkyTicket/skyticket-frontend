import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Button from "../components/Elements/Button/Button";
import Navbar from "../components/Fragments/Navbar/Navbar";
import DateList from "../components/Elements/Date/DateList";
import Accordion from "../components/Fragments/DetailPage/Accordion";
import FilterItem from "../components/Fragments/Filter/FilterItem";
import FlightInfo from "../components/Elements/Header/FlightInfo";
import FilterModal from "../components/Fragments/Filter/FilterModals";
import FilterButton from "../components/Elements/Button/FilterButton";
import LoadingAnimation from "../components/Fragments/Loader/LoadingAnimation";
import SetClass from "../components/Elements/Input/SetClass";

const TicketListPage = ({ data }) => {
  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [flightsData, setFlightsData] = useState(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  useEffect(() => {
    setFilters(location.state?.filters || {});
  }, [location.state?.filters]);

  const handleFilterSelect = (filter) => {
    console.log("Filter selected:", filter);
    setIsFilterModalOpen(false);
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3500);
  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      if (Object.keys(filters).length > 0) {
        try {
          const response = await axios.get(
            "http://34.101.158.185/api/v1/flights",
            {
              params: {
                departure_airport: filters.depCity?.input_value,
                arrival_airport: filters.arrCity?.input_value,
                flight_departure_date: filters.depDate,
                returning_flight_departure_date: filters.arrDate,
                is_round_trip: filters.isArrival,
                total_adult_passengers: filters.totalPassengers[0],
                total_child_passengers: filters.totalPassengers[1],
                total_infant_passengers: filters.totalPassengers[2],
                seat_class_type: filters.seatClass,
              },
            },
          );
          setFlightsData(response.data.flights);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    console.log(flightsData);
    fetchData();
  }, [filters]);

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
          <Button
            color="green"
            className="h-14 w-1/3 rounded-xl font-semibold"
            type=""
          >
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
              ) : flightsData ? (
                <Accordion data={flightsData} />
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
                    Coba cari perjalanan lainnya!
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
