import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import PageOrder from "./pages/PageOrder";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import TicketListPage from "./pages/TicketListPage";
import TicketListPageNotFound from "./pages/TicketListNotFound";
import ProtectedRoute from "./components/Fragments/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/ticket-list" element={<TicketListPage />} />
        <Route path="*" element={<TicketListPageNotFound />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-ticket"
          element={
            <ProtectedRoute>
              <PageOrder />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
