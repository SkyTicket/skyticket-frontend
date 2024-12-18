import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="py-8 text-center">
      <ul className="flex items-center justify-center gap-3">
        <li>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`flex h-10 min-w-[40px] items-center justify-center rounded-lg border px-2 text-base font-semibold ${
              currentPage === 1
                ? "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500"
                : "border-gray-300 bg-white text-[#7126B5] hover:bg-purple-100 hover:text-[#7126B5]"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li key={page}>
              <button
                onClick={() => handlePageClick(page)}
                className={`flex h-10 min-w-[40px] items-center justify-center rounded-lg border px-2 text-base font-medium ${
                  currentPage === page
                    ? "border-[#7126B5] bg-[#7126B5] text-white"
                    : "border-gray-300 bg-white text-[#7126B5] hover:bg-purple-100 hover:text-[#7126B5]"
                }`}
              >
                {page}
              </button>
            </li>
          ),
        )}

        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex h-10 min-w-[40px] items-center justify-center rounded-lg border px-2 text-base font-medium ${
              currentPage === totalPages
                ? "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500"
                : "border-gray-300 bg-white text-[#7126B5] hover:bg-purple-100 hover:text-[#7126B5]"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
