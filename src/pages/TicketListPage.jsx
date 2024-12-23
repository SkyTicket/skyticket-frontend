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
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TicketListPage = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [flightsData, setFlightsData] = useState(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedFilterText, setSelectedFilterText] = useState("Termurah");
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <Navbar showLoginButton={true} isMobile={true} />
      <div className="mx-auto max-w-7xl px-4 py-6">
        <p className="py-6 pt-0 text-xl font-semibold text-black sm:pt-6 sm:text-2xl md:pt-8">
          Pilih Penerbangan
        </p>

        <div className="mt-0 flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <Link
            to="/"
            className="flex h-14 w-screen items-center gap-4 bg-[#A06ECE] px-2 py-3 text-white sm:rounded-none sm:px-0 sm:pt-0 md:rounded-xl md:px-4 md:pt-3"
          >
            <FlightInfo />
          </Link>

          <Button
            isMobile={true}
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

        {isMobile ? (
          <div className="relative bottom-16 flex items-center py-1">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 rounded-2xl border-2 border-gray-400 bg-transparent px-2 py-1 text-gray-400 hover:bg-purple-100"
            >
              <FontAwesomeIcon
                icon={faFilter}
                className="h-3 w-4 text-gray-400"
              />
              <span>Filter</span>
            </button>
          </div>
        ) : null}

        {isSidebarOpen && isMobile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pt-96">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsSidebarOpen(false)}
            ></div>

            <div className="relative w-full max-w-md rounded-lg bg-white p-6 pb-44 shadow-lg">
              {/* Close Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-4 top-4 bg-transparent text-gray-500 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h3 className="mb-4 text-lg font-medium text-black">Filter</h3>
              <div className="divide-y">
                <FilterItem
                  label="Transit"
                  icon={
                    <img
                      src="/public/assets/icons/box.svg"
                      alt="Transit Icon"
                      className="h-5 w-5"
                    />
                  }
                />
                <FilterItem
                  label="Fasilitas"
                  icon={
                    <img
                      src="/public/assets/icons/heart.svg"
                      alt="Facility Icon"
                      className="h-5 w-5"
                    />
                  }
                />
                <FilterItem
                  label="Harga"
                  icon={
                    <img
                      src="/public/assets/icons/dollar-sign.svg"
                      alt="Price Icon"
                      className="h-5 w-5"
                    />
                  }
                />
              </div>
            </div>
          </div>
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
                    isMobile={isMobile}
                    icon={
                      <img
                        src="/public/assets/icons/box.svg"
                        alt="Transit Icon"
                        className="h-5 w-5"
                      />
                    }
                  />
                  <FilterItem
                    label="Fasilitas"
                    isMobile={isMobile}
                    icon={
                      <img
                        src="/public/assets/icons/heart.svg"
                        alt="Facility Icon"
                        className="h-5 w-5"
                      />
                    }
                  />
                  <FilterItem
                    label="Harga"
                    isMobile={isMobile}
                    icon={
                      <img
                        src="/public/assets/icons/dollar-sign.svg"
                        alt="Price Icon"
                        className="h-5 w-5"
                      />
                    }
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
                    totalPages={flightsData.pagination.total_pages}
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
