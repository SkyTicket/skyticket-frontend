import { useState, useRef } from "react";
import Button from "../components/Elements/Button/Button";
import Card from "../components/Fragments/Card/Card";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Pagination from "../components/Fragments/Pagination/Pagination";
import SkeletonCard from "../components/Elements/Skeleton/Skeleton";
import useFavoriteDestination from "../hooks/useFavoriteDestination";
import HomepageForm from "../components/Fragments/HomePageform/HomePageForm";
const HomePage = () => {
  const [page, setPage] = useState(1);
  const [continent, setContinent] = useState("");
  const [prefillData, setPrefillData] = useState(null);
  const sectionRef = useRef(null);
  const { destinations, loading, error, totalPages } = useFavoriteDestination(
    page,
    continent,
  );
  const { userId } = useContext(AuthContext);
  
      useEffect(() => {
        console.log("Current User ID:", userId);
      }, [userId]);

  const handleCardClick = async (url, destinationData) => {
    try {
      const parsedUrl = new URL(url);
      const params = new URLSearchParams(parsedUrl.search);

      const departure = params.get("departure_airport") || "";
      const arrival = params.get("arrival_airport") || "";
      const depDate = params.get("flight_departure_date")
        ? params.get("flight_departure_date").split("T")[0]
        : new Date().toISOString().split("T")[0];
      const totalPassengers = parseInt(
        params.get("total_adult_passengers") || "1",
        10,
      );
      const seatClass = params.get("seat_class_type") || "";

      setPrefillData({
        departure: {
          code: departure,
          city: destinationData.departure_city || "",
        },
        arrival: {
          code: arrival,
          city: destinationData.arrival_city || "",
        },
        depDate,
        seatClass,
        totalPassengers: [totalPassengers, 0, 0],
      });

      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error parsing URL:", error);
    }
  };

  return (
    <>
      <Navbar showLoginButton={true} />

      <section className="flex pt-16 md:flex-row">
        <div className="-z-10 min-h-[150px] w-1/2 bg-[#7126B5] bg-opacity-50"></div>
        <div className="-z-10 min-h-[150px] w-1/2 bg-[#E2D4F0]"></div>
      </section>

      <section className="relative mx-auto -mt-[182px] flex w-[93%] max-w-[1440px] flex-col justify-between overflow-hidden rounded-[20px] shadow-sm md:flex-row">
        <span className="flex min-h-[232px] w-full items-center justify-center bg-gradient-to-r from-[#FFE9CA] from-40% to-transparent px-12 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:justify-start">
          <span className="-mt-[20px] w-full text-center text-2xl sm:text-4xl md:text-left">
            <span className="mb-5 block text-2xl font-extrabold italic text-[#151515] sm:text-4xl">
              Diskon Hari Ini
            </span>
            <span className="text-2xl font-bold text-[#7126B5] sm:text-4xl">
              85%!
            </span>
          </span>
        </span>
        <img
          src="src/assets/images/bangkok.png"
          alt="Bangkok"
          className="absolute right-0 -z-10 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 md:w-3/5"
        />
      </section>

      <section className="relative mx-auto -mt-[50px] flex w-[93%] max-w-[1068px] flex-col items-center justify-center rounded-xl bg-white shadow-xl">
        <HomepageForm prefillData={prefillData} />
      </section>

      <section ref={sectionRef} className="mx-auto w-[90%] max-w-[1440px] py-8">
        <p className="mb-4 text-start text-2xl font-bold text-black md:text-lg">
          Destinasi Favorit
        </p>

        <div className="mb-8 flex space-x-4 overflow-x-auto px-1 pb-4 pt-1">
          {["Semua", "Asia", "Amerika", "Australia", "Eropa", "Afrika"].map(
            (region) => {
              const isActive = continent === (region === "Semua" ? "" : region);
              return (
                <Button
                  type="search"
                  key={region}
                  onClick={() => setContinent(region === "Semua" ? "" : region)}
                  className={`flex flex-shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${
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
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center p-5 text-center">
            <img
              alt="Favorite Destination Not Found"
              src="/public/assets/icons/purple-person-not-found.svg"
              className="mb-10 h-auto w-[300px] md:w-[350px]"
            />
            <p className="text-center text-lg text-[#8A8A8A]">{error}</p>
          </div>
        ) : destinations.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-5 text-center">
            <img
              alt="Favorite Destination Not Found"
              src="/public/assets/icons/purple-person-not-found.svg"
              className="mb-10 h-auto w-[300px] md:w-[350px]"
            />
            <p className="text-center text-lg text-[#8A8A8A]">
              Maaf, tidak ada data yang tersedia untuk wilayah ini.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {destinations.map((item, index) => (
              <Card
                key={index}
                destination={item.route}
                airline={item.airline}
                date={item.travel_date}
                price={item.price}
                image={item.city_image}
                label={item.promo}
                onClick={() =>
                  handleCardClick(item.url, {
                    departure_city: item.departure_city,
                    arrival_city: item.arrival_city,
                  })
                }
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
