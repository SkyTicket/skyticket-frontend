import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

import DetailFlight from "../components/Fragments/DetailFlight";
import AccordionDummy from "../components/Fragments/DetailPage/AccordionDummy";
import HeaderLogin from "../components/Fragments/Header/Header";
import Navbar from "../components/Fragments/Navbar/Navbar";
import { useEffect, useState } from "react";

const OrderHistory = () => {
  const [selected, setSelected] = useState(null);

  const handleFilterClick = () => {
    console.log("Filter button clicked!");
  };

  const handleSearchClick = () => {
    console.log("Search button clicked!");
  };

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

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
        <AccordionDummy onClick={(newValue) => setSelected(newValue)} />
        <DetailFlight data={selected} />
      </div>
    </div>
  );
};

export default OrderHistory;
