import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterModal = ({ onFilterSubmit, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const navigate = useNavigate();

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSubmit = () => {
    onFilterSubmit(selectedFilter);
    onClose();
    navigate("/ticket-list");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 pt-96 sm:pt-0">
      <div className="w-80 divide-y-2 rounded-lg bg-white shadow-lg">
        {/* Modal Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-white px-1 py-4">
          <button
            onClick={() => {
              onClose();
            }}
            className="ml-auto bg-white text-lg font-bold text-black"
          >
            <img
              src="/public/assets/icons/close.svg"
              alt="Close"
              className="h-4 w-3"
            />
          </button>
        </div>

        {/* Filter Options */}
        <ul className="divide-y divide-gray-200">
          {[
            { label: "Harga - Termurah", value: "cheapest" },
            { label: "Durasi - Terpendek", value: "shortest-duration" },
            { label: "Keberangkatan - Paling Awal", value: "first-departure" },
            { label: "Keberangkatan - Paling Akhir", value: "last-departure" },
            { label: "Kedatangan - Paling Awal", value: "first-arrival" },
            { label: "Kedatangan - Paling Akhir", value: "last-arrival" },
          ].map((filter) => (
            <li
              key={filter.value}
              className={`flex cursor-pointer items-center justify-between px-3 py-3 ${
                selectedFilter === filter.value
                  ? "bg-purple-600 text-white"
                  : "text-black hover:bg-purple-600 hover:text-white"
              }`}
              onClick={() => handleSelectFilter(filter.value)}
            >
              <span className="text-sm font-medium">{filter.label}</span>
              {selectedFilter === filter.value && (
                <span className="text-green-500">
                  <img
                    src="/public/assets/icons/checklist.svg"
                    alt="checklist"
                    className="h-6 w-6"
                  />
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Submit Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={handleSubmit}
            disabled={!selectedFilter}
            className={`rounded-lg px-6 py-2 font-semibold ${
              selectedFilter
                ? "bg-purple-800 text-white hover:bg-purple-700"
                : "cursor-not-allowed bg-gray-300 text-gray-500"
            }`}
          >
            Pilih
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
