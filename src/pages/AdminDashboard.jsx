import React from 'react';
import { UserProvider } from '../contexts/UserContext';
import { NotificationProvider } from '../contexts/NotificationContext';
import UserList from '../components/Fragments/AdminDashboard/UserList'; 
import NotificationForm from '../components/Fragments/AdminDashboard/NotificationForm';

const AdminDashboard = () => {
  return (
    <UserProvider>
      <NotificationProvider>
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-center font-bold text-lg border-b border-gray-700 dark:text-white">Admin Dashboard</div>
            <nav className="flex-1 p-4">
              <ul>
                <li className="mb-2">
                  <a href="#users" className="block p-2 rounded hover:bg-gray-700 dark:text-white">User List</a>
                </li>
                <li>
                  <a href="#notifications" className="block p-2 rounded hover:bg-gray-700 dark:text-white">Notifications</a>
                </li>
              </ul>
            </nav>
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
      </NotificationProvider>
    </UserProvider>
  );
};

export default AdminDashboard;