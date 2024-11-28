import Button from "../components/Elements/Button/Button";
import Card from "../components/Fragments/Card/Card";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Pagination from "../components/Fragments/Pagination/Pagination";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="flex md:flex-row pt-16">
        <div className="bg-[#7126B5] bg-opacity-50 min-h-[150px] w-1/2"></div>
        <div className="bg-[#E2D4F0] min-h-[150px] w-1/2"></div>
      </section>

      <section className="flex relative justify-center -mt-[182px]">
        <div className="flex relative w-[90%] max-w-[1440px] min-h-[232px] rounded-[20px] overflow-hidden shadow-sm">
          <div className="flex flex-col justify-center bg-[#FFE9CA] pl-20 pr-6">
            <p className="text-4xl leading-[54px] font-extrabold italic text-start text-[#151515]">
              Diskon Hari Ini
            </p>
            <p className="text-4xl leading-[54px] font-bold text-start text-[#7126B5]">
              85%!
            </p>
          </div>
          <div className="flex-1 relative">
            <img
              src="src/assets/images/bangkok.png"
              alt="Bangkok"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 w-[30%] bg-gradient-to-l from-transparent via-[#FFE9CA] to-[#FFE9CA]"></div>
          </div>
        </div>
      </section>

      <section className="mx-4 flex relative justify-center -mt-[50px]">
        <div className="flex items-center justify-center text-center bg-white max-w-[1068px] sm:max-w-[80%] h-[298px] p-8 rounded-xl shadow-lg">
          <div>
            <p className="text-2xl font-bold text-gray-800">Placeholder Card</p>
            <p className="mt-4 text-gray-600">
              This is a placeholder card that overlaps the banner. You can use
              this card to display additional information or content relevant to
              your page.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-[1440px] py-8">
        <p className="text-start font-bold text-black mb-4">
          Destinasi Favorit
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {["Semua", "Asia", "Amerika", "Australia", "Eropa", "Afrika"].map(
            (region) => (
              <Button type="search" key={region}>
                {region}
              </Button>
            )
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            {
              destination: "Jakarta -> Bangkok",
              airline: "AirAsia",
              date: "20 - 30 Maret 2023",
              price: "IDR 950.000",
              image: "src/assets/images/bangkok.png",
              label: "Limited!",
            },
            {
              destination: "Jakarta -> Bangkok",
              airline: "AirAsia",
              date: "20 - 30 Maret 2023",
              price: "IDR 950.000",
              image: "src/assets/images/bangkok.png",
              label: "Limited!",
            },
            {
              destination: "Jakarta -> Sydney",
              airline: "AirAsia",
              date: "5 - 25 Maret 2023",
              price: "IDR 3.650.000",
              image: "src/assets/images/sydney.png",
              label: "50% OFF",
            },
            {
              destination: "Jakarta -> Sydney",
              airline: "AirAsia",
              date: "5 - 25 Maret 2023",
              price: "IDR 3.650.000",
              image: "src/assets/images/sydney.png",
              label: "50% OFF",
            },
            {
              destination: "Jakarta -> Bangkok",
              airline: "AirAsia",
              date: "20 - 30 Maret 2023",
              price: "IDR 950.000",
              image: "src/assets/images/bangkok.png",
              label: "Limited!",
            },
          ].map((item, index) => (
            <Card
              key={index}
              destination={item.destination}
              airline={item.airline}
              date={item.date}
              price={item.price}
              image={item.image}
              label={item.label}
            />
          ))}
        </div>
        <Pagination />
      </section>
    </>
  );
};

export default HomePage;
