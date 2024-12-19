import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/Homepage";
import PageOrder from "./pages/PageOrder";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/404";
import OrderHistory from "./pages/OrderHistory";
import ProtectedRoute from "./components/Fragments/ProtectedRoute";
import TicketListPage from "./pages/TicketListPage";
import NotificationsPage from "./pages/NotificationsPage";
import ResetPasswordPage from "./pages/ResetPaswordPage";
import ResetPasswordRequestPage from "./pages/ResetPasswordRequestPage";
import FlightBooking  from "./pages/FlighBooking";
import PaymentView from "./pages/Payment";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/testing" element={<FlightBooking />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ticket-list" element={<TicketListPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/reset-password/request"
          element={<ResetPasswordRequestPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/order-ticket"
          element={
            <ProtectedRoute>
              <PageOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PaymentView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notification"
          element={
            <ProtectedRoute>
              <NotificationsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
