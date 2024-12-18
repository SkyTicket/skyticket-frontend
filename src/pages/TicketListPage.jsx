import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../components/Elements/Button/Button";
import FilterButton from "../components/Elements/Button/FilterButton";
import DateList from "../components/Elements/Date/DateList";
import FlightInfo from "../components/Elements/Header/FlightInfo";
import Accordion from "../components/Fragments/DetailPage/Accordion";
import FilterItem from "../components/Fragments/Filter/FilterItem";
import FilterModal from "../components/Fragments/Filter/FilterModals";
import LoadingAnimation from "../components/Fragments/Loader/LoadingAnimation";
import Navbar from "../components/Fragments/Navbar/Navbar";
import NoDataFound from "../components/Fragments/detailpage/NoDataFound";
import { fetchFlights } from "../services/flightsService";
import Pagination from "../components/Fragments/Pagination/Pagination";

const TicketListPage = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [flightsData, setFlightsData] = useState(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedFilterText, setSelectedFilterText] = useState("Termurah");

  useEffect(() => {
    setFilters(location.state?.filters || {});
  }, [location.state?.filters]);

  const handleFilterSelect = (filter) => {
    const filterTextMap = {
      cheapest: "Termurah",
      "shortest-duration": "Terpendek",
      "first-departure": "Paling Awal",
      "last-departure": "Paling Akhir",
      "first-arrival": "Paling Awal",
      "last-arrival": "Paling Akhir",
    };

    setSelectedFilterText(filterTextMap[filter]);
  };
  const closeModal = () => {
    setIsFilterModalOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      if (Object.keys(filters).length > 0) {
        try {
          const response = await fetchFlights(filters);
          if (response.status === 404) {
            setErrors(response);
          } else {
            setFlightsData(response.flights);
          }
        } catch (error) {
          setErrors(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [filters]);

  return (
    <>
      <Navbar showLoginButton={true} />
      <div className="mx-auto max-w-7xl px-4 py-6">
        <p className="py-6 text-2xl font-semibold text-black">
          Pilih Penerbangan
        </p>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link
            to="/"
            className="flex h-14 w-full items-center gap-4 rounded-xl bg-[#A06ECE] px-4 py-3 text-white"
          >
            <FlightInfo />
          </Link>
          <Button
            color="green"
            className="h-14 w-full rounded-xl font-semibold md:w-1/3"
            type=""
          >
            <Link to="/" className="text-center text-white">
              Ubah Pencarian
            </Link>
          </Button>
        </div>

        <DateList />

        {/* Filter Button */}
        <div className="mb-4 flex justify-end pt-7">
          <FilterButton
            onClick={() => setIsFilterModalOpen(true)}
            text={selectedFilterText}
          />
        </div>

        {/* Filter Modal */}
        {isFilterModalOpen && (
          <FilterModal
            onFilterSubmit={handleFilterSelect}
            onClose={closeModal}
          />
        )}

        <div className="flex justify-center">
          <div className="flex w-full justify-center md:mt-6 md:justify-between">
            <aside className="hidden w-[300px] text-black md:block">
              <div className="rounded-lg bg-white p-3 shadow-lg">
                <div className="mb-2">
                  <h3 className="pl-4 pt-2 text-lg font-medium">Filter</h3>
                </div>

                <div className="divide-y">
                  <FilterItem
                    label="Transit"
                    icon={
                      <img
                        src="/src/assets/icons/box.svg"
                        alt="Transit Icon"
                        className="h-5 w-5"
                      />
                    }
                  />
                  <FilterItem
                    icon={
                      <img
                        src="/src/assets/icons/heart.svg"
                        alt="Facility Icon"
                        className="h-5 w-5"
                      />
                    }
                    label="Fasilitas"
                  />
                  <FilterItem
                    icon={
                      <img
                        src="/src/assets/icons/dollar-sign.svg"
                        alt="Price Icon"
                        className="h-5 w-5"
                      />
                    }
                    label="Harga"
                  />
                </div>
              </div>
            </aside>

            <div className="flex min-w-[70%] flex-col justify-center gap-4">
              {isLoading ? (
                <div className="flex flex-col items-center">
                  <LoadingAnimation />
                  <img src="" alt="" />
                </div>
              ) : flightsData ? (
                <div className="flex flex-col">
                  <Accordion data={flightsData} />
                  <Pagination
                    currentPage={flightsData.pagination.current_page}
                    totalPages={1}
                    onPageChange={(newPage) =>
                      setFilters((prev) => ({ ...prev, page: newPage }))
                    }
                  />
                </div>
              ) : errors.status === 404 ? (
                <NoDataFound
                  svg={"notfound"}
                  alt={"Data Not Found"}
                  text={"pencarian Anda tidak ditemukan"}
                />
              ) : (
                <NoDataFound
                  svg={"ticketSoldOut"}
                  alt={"Ticket Sold Out"}
                  text={"Ticket terjual habis!"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketListPage;
