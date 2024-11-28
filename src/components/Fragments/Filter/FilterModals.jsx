import React, { useState } from "react";

const FilterModal = ({ onFilterSubmit, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      {/* Container modal */}
      <div className="bg-white rounded-lg shadow-lg w-80 divide-y-2">
        {/* Header */}
        <div className="flex justify-between items-center bg-white text-white rounded-t-lg px-4 py-4">
          <button
            onClick={onClose}
            className="text-black text-lg font-bold ml-auto"
          >
            <img
              src="/src/assets/icons/close.svg"
              alt="Close"
              className="w-3 h-4"
            />
          </button>
        </div>

        {/* Daftar Filter */}
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
              className={`flex justify-between items-center px-4 py-3 cursor-pointer 
                    ${
                      selectedFilter === filter.value
                        ? "bg-purple-600 text-white"
                        : "hover:bg-purple-600 hover:text-white text-black"
                    }`}
              onClick={() => handleSelectFilter(filter.value)}
            >
              <span className="text-sm font-medium">{filter.label}</span>
              {selectedFilter === filter.value && (
                <span className="text-green-500 font-bold">
                  <img
                    src="/src/assets/icons/checklist.svg"
                    alt="checlist"
                    className="w-6 h-6"
                  />
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="p-4 flex justify-end">
          <button
            onClick={() => {
              onFilterSubmit(selectedFilter);
              onClose();
            }}
            disabled={!selectedFilter}
            className={`px-6 py-2 rounded-lg font-semibold ${
              selectedFilter
                ? "bg-purple-800 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
