import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function NoOrderHistory({ isMobile, openFilter, openSearch }) {
  return (
    <div className={`${isMobile && "bg-gradient-to-b"}`}>
      {isMobile && (
        <div className="flex flex-col items-end p-4 pb-0">
          <div className="mb-4 flex w-full items-center justify-between">
            <p className="text-2xl font-semibold text-black">Riwayat Pesanan</p>
            <FontAwesomeIcon
              icon={faSearch}
              className="size-5 text-black"
              onClick={openSearch}
            />
          </div>
          <button
            onClick={openFilter}
            className="flex h-fit w-fit items-center gap-1 rounded-full border border-[#D0D0D0] bg-white p-1 px-3 text-[#8A8A8A] hover:bg-[#f6edff]"
          >
            <FontAwesomeIcon icon={faFilter} />
            <span className="text-sm text-black">Filter</span>
          </button>
        </div>
      )}

      <div
        className={`flex flex-col items-center justify-center text-sm text-black`}
      >
        <img
          src="/assets/icons/noOrderHistory.svg"
          alt="Order Not Found"
          className="mb-2 mt-8"
        />
        <span className="text-[#7126B5]">Oops! Riwayat pesanan kosong!</span>
        <span className="mb-8">Anda belum melakukan pemesanan penerbangan</span>
        <Link to={"/"}>
          <button
            className={`bg-[#7126B5] text-white ${isMobile ? "" : "min-w-[26rem]"}`}
          >
            Cari Penerbangan
          </button>
        </Link>
        {!isMobile && <span className="h-[20vh]" />}
      </div>
    </div>
  );
}

export default NoOrderHistory;
