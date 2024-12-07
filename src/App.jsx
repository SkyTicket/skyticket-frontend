import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PageOrder from "./pages/PageOrder";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import TicketListPage from "./pages/TicketListPage";
import TicketListPageNotFound from "./pages/TicketListNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/ticket-list" element={<TicketListPage />} />
        <Route path="/order-ticket" element={<PageOrder />} />
        <Route path="*" element={<TicketListPageNotFound />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
