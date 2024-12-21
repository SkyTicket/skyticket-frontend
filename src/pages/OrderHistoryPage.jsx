import { useEffect, useState } from "react";
import { fetchOrderHistory } from "../services/order.history.service";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../components/Fragments/Navbar/Navbar";
import Backdrop from "../components/Elements/Search/Backdrop";
import SetDate2 from "../components/Elements/Input/SetDate2";
import FilterOrder from "../components/Fragments/OrderHistory/FilterOrder";
import HeaderLogin from "../components/Fragments/Header/Header";
import DetailFlight from "../components/Fragments/OrderHistory/DetailFlight";
import AccordionOrder from "../components/Fragments/OrderHistory/AccordionOrder";
import React from "react";
import NoOrderHistory from "../components/Fragments/OrderHistory/NoOrderHistory";

const OrderHistory = () => {
  const [selected, setSelected] = useState(null);
  const [history, setHistory] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 500);
    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  if (isMobile && selected) {
    return (
      <DetailFlight
        data={selected}
        isMobile={isMobile}
        onClose={() => setSelected(null)}
      />
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <Navbar />

      {!isMobile && (
        <HeaderLogin
          title="Riwayat Pemesanan"
          buttonText="Beranda"
          rightButtonIcon={faFilter}
          rightButtonText="Filter"
          rightButtonAction={() => setOpenFilter(true)}
          searchButtonIcon={faSearch}
          searchButtonAction={() => setOpenSearch(true)}
        />
      )}

      {history ? (
        <div
          className={`${isMobile ? "justify-center" : "mx-auto w-[74vw] justify-start"} flex gap-10`}
        >
          <AccordionOrder
            data={history}
            isMobile={isMobile}
            onClick={(newValue) => setSelected(newValue)}
            openFilter={() => setOpenFilter(true)}
            openSearch={() => setOpenSearch(true)}
          />
          {selected && <DetailFlight data={selected} />}
        </div>
      ) : (
        <NoOrderHistory
          isMobile={isMobile}
          openFilter={() => setOpenFilter(true)}
          openSearch={() => setOpenSearch(true)}
        />
      )}

      {openFilter && (
        <>
          <Backdrop />
          <FilterOrder close={() => setOpenFilter(false)} />
        </>
      )}

      {openSearch && (
        <SetDate2 onClose={() => setOpenSearch(false)} isMobile={isMobile} />
      )}
    </div>
  );
};

export default OrderHistory;
