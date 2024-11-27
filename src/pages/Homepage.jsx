import Button from "../components/Elements/Button/Button";
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
          <div className="flex flex-col justify-center bg-[#FFE9CA] pl-20">
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

      <section className="flex relative justify-center -mt-[50px]">
        <div className="bg-white max-w-[1068px] sm:max-w-[80%] h-[298px] p-8 rounded-xl shadow-lg flex items-center justify-center text-center">
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
        <div className="flex gap-4 mb-8">
          {["Semua", "Asia", "Amerika", "Australia", "Eropa", "Afrika"].map(
            (region) => (
              <Button type="search" key={region}>
                {region}
              </Button>
            )
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[4px] shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.destination}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                  {item.label}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.destination}
                </h3>
                <p className="text-sm text-purple-600">{item.airline}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="mt-2 text-lg font-bold text-red-600">
                  Mulai dari {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
      </section>
    </>
  );
};

export default HomePage;
