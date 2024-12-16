import DetailFlight from "../components/Fragments/DetailFlight";
import AccordionDummy from "../components/Fragments/detailpage/accordionDummy";
import HeaderLogin from "../components/Fragments/Header/Header";
import Navbar from "../components/Fragments/Navbar/Navbar";

const OrderHistory = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <HeaderLogin title="Riwayat Pemesanan" buttonText="Beranda" />
      <div className="flex justify-center gap-10">
        <AccordionDummy />
        <DetailFlight />
      </div>
    </div>
  );
};

export default OrderHistory;
