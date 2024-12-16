import Button from "../components/Elements/Button/Button";
import Card from "../components/Fragments/Card/Card";
import HomepageForm from "../components/Fragments/HomePageform/HomePageForm";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Pagination from "../components/Fragments/Pagination/Pagination";

const HomePage = () => {
  return (
    <>
      <Navbar showLoginButton={true} />
      <section className="flex pt-16 md:flex-row">
        <div className="min-h-[150px] w-1/2 bg-[#7126B5] bg-opacity-50"></div>
        <div className="min-h-[150px] w-1/2 bg-[#E2D4F0]"></div>
      </section>

      <section className="relative -mt-[182px] flex justify-center">
        <div className="relative flex min-h-[232px] w-[90%] max-w-[1440px] overflow-hidden rounded-[20px] shadow-sm">
          <div className="flex flex-col justify-center bg-[#FFE9CA] pl-20 pr-6">
            <p className="text-start text-4xl font-extrabold italic leading-[54px] text-[#151515]">
              Diskon Hari Ini
            </p>
            <p className="text-start text-4xl font-bold leading-[54px] text-[#7126B5]">
              85%!
            </p>
          </div>
          <div className="relative flex-1">
            <img
              src="src/assets/images/bangkok.png"
              alt="Bangkok"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 w-[30%] bg-gradient-to-l from-transparent via-[#FFE9CA] to-[#FFE9CA]"></div>
          </div>
        </div>
      </section>

      <section className="relative mx-4 -mt-[50px] flex flex-col items-center">
        <p className="mb-2 block w-full cursor-default select-none text-2xl font-bold text-black md:hidden">
          Hei! Mau kemana?
        </p>
        <div className="flex max-w-[1068px] flex-col items-center justify-center rounded-xl bg-white shadow-lg sm:max-w-[80%] md:h-[298px]">
          <HomepageForm />
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-[1440px] py-8">
        <p className="mb-4 text-start font-bold text-black">
          Destinasi Favorit
        </p>
        <div className="mb-8 flex flex-wrap items-center gap-4">
          {["Semua", "Asia", "Amerika", "Australia", "Eropa", "Afrika"].map(
            (region) => (
              <Button type="search" key={region}>
                {region}
              </Button>
            ),
          )}
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
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
