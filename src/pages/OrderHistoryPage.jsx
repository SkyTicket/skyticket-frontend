import { useEffect, useState } from "react";
import { fetchOrderHistory } from "../services/order.history.service";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

import DetailFlight from "../components/Fragments/DetailFlight";
import AccordionDummy from "../components/Fragments/DetailPage/AccordionDummy";
import HeaderLogin from "../components/Fragments/Header/Header";
import Navbar from "../components/Fragments/Navbar/Navbar";

const OrderHistory = () => {
  const [selected, setSelected] = useState(null);
  const [history, setHistory] = useState(null);

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

  const handleFilterClick = () => {
    console.log("Filter button clicked!");
  };

  const handleSearchClick = () => {
    console.log("Search button clicked!");
  };

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <HeaderLogin
        title="Riwayat Pemesanan"
        buttonText="Beranda"
        rightButtonIcon={faFilter}
        rightButtonText="Filter"
        rightButtonAction={handleFilterClick}
        searchButtonIcon={faSearch}
        searchButtonAction={handleSearchClick}
      />
      <div className="flex justify-center gap-10">
        <AccordionDummy
          data={history}
          onClick={(newValue) => setSelected(newValue)}
        />
        <DetailFlight data={selected} />
      </div>
    </div>
  );
};

export default OrderHistory;
