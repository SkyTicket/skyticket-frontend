import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { UserProvider } from "../contexts/UserContext";
import { NotificationProvider } from "../contexts/NotificationContext";
import UserList from "../components/Fragments/AdminDashboard/UserList";
import NotificationForm from "../components/Fragments/AdminDashboard/NotificationForm";
import { useAuth } from "../contexts/AuthContext";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false); 

  const handleLogout = async () => {
    setIsProcessing(true); 
    try {
      await logout(); 
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <UserProvider>
      <NotificationProvider>
        <div>
          <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white flex flex-col">
              <div className="p-4 text-center font-bold text-lg border-b border-gray-700 dark:text-white">
                Admin Dashboard
              </div>
              <nav className="flex-1 p-4">
                <ul>
                  <li className="mb-2">
                    <a
                      href="#users"
                      className="flex items-center p-2 rounded hover:bg-gray-700 dark:text-white"
                    >
                      <FontAwesomeIcon icon={faUsers} className="mr-2" />
                      User List
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#notifications"
                      className="flex items-center p-2 rounded hover:bg-gray-700 dark:text-white"
                    >
                      <FontAwesomeIcon icon={faBell} className="mr-2" />
                      Notifications
                    </a>
                  </li>
                </ul>
              </nav>
              {/* Logout Button */}
              <div className="p-4 border-t border-gray-700">
                <button
                  onClick={handleLogout}
                  disabled={isProcessing}
                  className={`w-full flex items-center justify-center p-2 ${
                    isProcessing
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-[#7126B5] hover:bg-red-600"
                  } text-white rounded`}
                >
                  {isProcessing ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Memproses...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                      Logout
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 overflow-auto dark:text-black">
              {/* User List Section */}
              <div id="users" className="mb-8">
                <h2 className="text-2xl font-bold mb-4">User List</h2>
                <div className="bg-white shadow p-4 rounded">
                  <UserList />
                </div>
              </div>

              {/* Notification Section */}
              <div id="notifications">
                <h2 className="text-2xl font-bold mb-4">Send Notification</h2>
                <div className="bg-white shadow p-4 rounded">
                  <NotificationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </NotificationProvider>
    </UserProvider>
  );
};

export default AdminDashboard;
