import { useCallback, useEffect, useState } from "react";
import { fetchOrderHistory } from "../services/order.history.service";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

import DetailFlight from "../components/Fragments/OrderHistory/DetailFlight";
import AccordionOrder from "../components/Fragments/OrderHistory/AccordionOrder";
import HeaderLogin from "../components/Fragments/Header/Header";
import Navbar from "../components/Fragments/Navbar/Navbar";
import FilterOrder from "../components/Fragments/OrderHistory/FilterOrder";
import SetDestination from "../components/Elements/Input/SetDestination";
import Backdrop from "../components/Elements/Search/Backdrop";
import DatePicker from "../components/Elements/Input/SetDate";
import SetDate2 from "../components/Elements/Input/SetDate2";

const OrderHistory = () => {
  const [selected, setSelected] = useState(null);
  const [history, setHistory] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchOrderHistory();
        setHistory(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <HeaderLogin
        title="Riwayat Pemesanan"
        buttonText="Beranda"
        rightButtonIcon={faFilter}
        rightButtonText="Filter"
        rightButtonAction={() => setOpenFilter(true)}
        searchButtonIcon={faSearch}
        searchButtonAction={() => setOpenSearch(true)}
      />
      {history ? (
        <div className="mx-auto flex w-[74vw] justify-start gap-10">
          <AccordionOrder
            data={history}
            onClick={(newValue) => setSelected(newValue)}
          />
          {selected && <DetailFlight data={selected} />}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-black">
          <img
            src="/assets/icons/noOrderHistory.svg"
            alt="Order Not Found"
            className="mb-2 mt-8"
          />
          <span>Oops! Riwayat pesanan kosong!</span>
          <span className="mb-8">
            Anda belum melakukan pemesanan penerbangan
          </span>
          <button className={`min-w-[26rem] bg-[#7126B5] text-white`}>
            Cari Penerbangan
          </button>
          <span className="h-[20vh]"></span>
        </div>
      )}
      {openFilter && (
        <>
          <Backdrop />
          <FilterOrder close={() => setOpenFilter(false)} />
        </>
      )}
      {openSearch && (
        <SetDate2 onClose={() => setOpenSearch(false)} isMobile={false} />
      )}
    </div>
  );
};

export default OrderHistory;
