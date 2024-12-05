import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketListPage from "./pages/TicketListPage";
import TicketListPageNotFound from "./pages/TicketListNotFound";
import HomePage from "./pages/HomePage";
import PageOrder from "./pages/PageOrder";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const flights = [
    {
      id: 1,
      departureTime: "07:00",
      departureCity: "Jakarta",
      departureCityShort: "JKT",
      departureDate: "3 Maret 2023",
      arrivalTime: "11:00",
      arrivalCity: "Melbourne",
      arrivalCityShort: "MLB",
      arrivalDate: "3 Maret 2023",
      duration: "4h 0m",
      price: "IDR 4.950.000",
      departure: "Soekarno Hatta - Terminal 1A Domestik",
      flightNumber: "JT - 203",
      baggage: "20 kg",
      cabin: "7 kg",
      entertainment: "In-Flight Entertainment",
      arrival: "Melbourne International Airport",
      airLineLogo: "/logoAirline.png",
    },
    {
      id: 2,
      departureTime: "08:00",
      departureCity: "Jakarta",
      departureCityShort: "JKT",
      departureDate: "3 Maret 2023",
      arrivalTime: "12:00",
      arrivalCity: "Melbourne",
      arrivalCityShort: "MLB",
      arrivalDate: "3 Maret 2023",
      duration: "4h 0m",
      price: "IDR 5.950.000",
      departure: "Soekarno Hatta - Terminal 1A Domestik",
      flightNumber: "JT - 204",
      baggage: "20 kg",
      cabin: "7 kg",
      entertainment: "In-Flight Entertainment",
      arrival: "Melbourne International Airport",
      airLineLogo: "/logoAirline.png",
    },
    {
      id: 3,
      departureTime: "13:15",
      departureCity: "Jakarta",
      departureCityShort: "JKT",
      departureDate: "3 Maret 2023",
      arrivalTime: "17:15",
      arrivalCity: "Melbourne",
      arrivalCityShort: "MLB",
      arrivalDate: "3 Maret 2023",
      duration: "4h 0m",
      price: "IDR 5.950.000",
      departure: "Soekarno Hatta - Terminal 1A Domestik",
      flightNumber: "JT - 204",
      baggage: "20 kg",
      cabin: "7 kg",
      entertainment: "In-Flight Entertainment",
      arrival: "Melbourne International Airport",
      airLineLogo: "/logoAirline.png",
    },
    {
      id: 4,
      departureTime: "20:15",
      departureCity: "Jakarta",
      departureCityShort: "JKT",
      departureDate: "3 Maret 2023",
      arrivalTime: "23:30",
      arrivalCity: "Melbourne",
      arrivalCityShort: "MLB",
      arrivalDate: "3 Maret 2023",
      duration: "3h 15m",
      price: "IDR 5.950.000",
      departure: "Soekarno Hatta - Terminal 1A Domestik",
      flightNumber: "JT - 204",
      baggage: "20 kg",
      cabin: "7 kg",
      entertainment: "In-Flight Entertainment",
      arrival: "Melbourne International Airport",
      airLineLogo: "/logoAirline.png",
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order-ticket" element={<PageOrder />} />
        <Route path="/ticket-list" element={<TicketListPage />} />
        <Route
          path="/ticket-list/data"
          element={<TicketListPage data={flights} />}
        />
        <Route path="*" element={<TicketListPageNotFound />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
