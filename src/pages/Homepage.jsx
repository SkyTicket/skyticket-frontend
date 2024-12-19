import { useState, useRef } from "react";
import Button from "../components/Elements/Button/Button";
import Card from "../components/Fragments/Card/Card";
import HomepageForm from "../components/Fragments/homepageform/homepageForm";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Pagination from "../components/Fragments/Pagination/Pagination";
import SkeletonCard from "../components/Elements/Skeleton/Skeleton";
import useFavoriteDestination from "../hooks/useFavoriteDestination";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [continent, setContinent] = useState("");
  const sectionRef = useRef(null);
  const { destinations, loading, error, totalPages } = useFavoriteDestination(
    page,
    continent,
  );
  const { userId } = useContext(AuthContext);
  
      useEffect(() => {
        console.log("Current User ID:", userId);
      }, [userId]);

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
        <p className="mb-2 block w-full text-2xl font-bold text-black md:hidden">
          Hei! Mau kemana?
        </p>
        <div className="flex max-w-[1068px] flex-col items-center justify-center rounded-xl bg-white shadow-lg sm:max-w-[80%] md:h-[298px]">
          <HomepageForm />
        </div>
      </section>

      <section ref={sectionRef} className="mx-auto w-[90%] max-w-[1440px] py-8">
        <p className="mb-4 text-start font-bold text-black">
          Destinasi Favorit
        </p>
        <div className="mb-8 flex flex-wrap items-center gap-4">
          {["Semua", "Asia", "Amerika", "Australia", "Eropa", "Afrika"].map(
            (region) => {
              const isActive = continent === (region === "Semua" ? "" : region);
              return (
                <Button
                  type="search"
                  key={region}
                  onClick={() => setContinent(region === "Semua" ? "" : region)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                    isActive
                      ? "bg-[#7126B5] text-white"
                      : "bg-[#E2D4F0] text-[#3C3C3C]"
                  }`}
                >
                  {region}
                </Button>
              );
            },
          )}
        </div>
        {loading ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : destinations.length === 0 ? (
          <p className="text-center text-lg text-[#8A8A8A]">
            Maaf, tidak ada data yang tersedia untuk wilayah ini.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {destinations.map((item, index) => (
              <Card
                key={index}
                destination={item.route}
                airline={item.airline}
                date={item.travel_date}
                price={item.price}
                image={item.city_image}
                label={item.promo}
              />
            ))}
          </div>
        )}
        {!loading && !error && destinations.length > 0 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        )}
      </section>
    </>
  );
};

export default HomePage;
