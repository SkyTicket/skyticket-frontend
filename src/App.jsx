import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/Fragments/ProtectedRoute";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/HomePage";
import PageOrder from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/404";
import OrderHistory from "./pages/OrderHistoryPage";
import TicketListPage from "./pages/TicketListPage";
import NotificationsPage from "./pages/NotificationsPage";
import ResetPasswordPage from "./pages/ResetPaswordPage";
import ResetPasswordRequestPage from "./pages/ResetPasswordRequestPage";
import FlightBookingPage from "./pages/FlightBookingPage";
import PaymentView from "./pages/PaymentPage";
import AdminDashboard from "./pages/AdminDashboard";
import RoleProtectedRoute from "./components/Fragments/RoleProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
function App() {
  return (
    <>
      <NotificationProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/testing" element={<FlightBookingPage />} />
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
            path="/admin"
            element={
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </RoleProtectedRoute>
            }
          />{" "}
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
              <AuthProvider>
                <NotificationProvider>
                  <ProtectedRoute>
                    <NotificationsPage />
                  </ProtectedRoute>
                </NotificationProvider>
              </AuthProvider>
            }
          />
        </Routes>
      </NotificationProvider>
    </>
  );
}

export default App;
