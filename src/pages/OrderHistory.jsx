import DetailFlight from "../components/Fragments/DetailFlight";
import AccordionDummy from "../components/Fragments/detailpage/accordionDummy";
import HeaderLogin from "../components/Fragments/Header/Header";
import NavbarLogin from "../components/Fragments/Navbar/NavbarLogin";

const OrderHistory = () => {
    return (
      <div className="flex flex-col h-screen">
        <NavbarLogin/>
        <HeaderLogin title="Riwayat Pemesanan" buttonText="Beranda"/>
        <div className="flex justify-center gap-10">
          <AccordionDummy/>
          <DetailFlight/>
        </div>
      </div>
    );
  };
  
  export default OrderHistory;