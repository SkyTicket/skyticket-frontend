import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { fetchFlights } from "../services/flightsService";
import Button from "../components/Elements/Button/Button";
import Navbar from "../components/Fragments/Navbar/Navbar";
import DateList from "../components/Elements/Date/DateList";
import Accordion from "../components/Fragments/DetailPage/Accordion";
import FilterItem from "../components/Fragments/Filter/FilterItem";
import FilterModal from "../components/Fragments/Filter/FilterModals";
import NoDataFound from "../components/Fragments/detailpage/NoDataFound";
import FilterButton from "../components/Elements/Button/FilterButton";
import LoadingAnimation from "../components/Fragments/Loader/LoadingAnimation";
import Pagination from "../components/Fragments/Pagination/Pagination";

const TicketListPage = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [flightsData, setFlightsData] = useState(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  useEffect(() => {
    setFilters(location.state?.filters || {});
  }, [location.state?.filters]);

  const handleFilterSelect = (filter) => {
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
        <div className="flex flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="flex h-14 w-full items-center gap-4 rounded-xl bg-[#A06ECE] px-4 py-3 text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
            <p className="text-white">JKT → MLB - 2 Penumpang - Economy</p>
          </Link>
          <Button
            color="green"
            className="h-14 w-1/3 rounded-xl font-semibold"
            type=""
          >
            <Link to="/" className="text-center text-white">
              Ubah Pencarian
            </Link>
          </Button>
        </div>
        <div className="mb-6 flex justify-end"></div>

        <DateList />

        <div className="mb-4 flex justify-end pt-7">
          <FilterButton onClick={() => setIsFilterModalOpen(true)} />
        </div>
        {isFilterModalOpen && (
          <FilterModal onFilterSelect={handleFilterSelect} />
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

            <div className="flex min-w-[70%] justify-center">
              {isLoading ? (
                <div className="flex flex-col items-center">
                  <LoadingAnimation />
                  <img src=""></img>
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
              ) : errors.status == 404 ? (
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
