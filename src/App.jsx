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
import ResetPasswordPage from "./pages/ResetPaswordPage";
import ResetPasswordRequestPage from "./pages/ResetPasswordRequestPage";
import NotFoundPage from "./pages/404";
import NotificationsPage from "./pages/NotificationsPage";
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
        <Route path="/reset-password/request" element={<ResetPasswordRequestPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/ticket-list" element={<TicketListPage />} />
        <Route path="*" element={<TicketListPageNotFound />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/notification" element={<NotificationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
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
