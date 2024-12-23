import React from 'react';
import useUsers from '../../../hooks/useUsers';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-20 bg-gray-200 rounded-lg animate-pulse w-full mx-auto"
          ></div>
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-500 text-center">{`Error: ${error}`}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.user_id}
          className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl">
                {user.user_name[0]}
              </div>
              <div>
                <p className="font-semibold text-l text-gray-800">{user.user_name}</p>
                <p className="text-sm text-gray-500">{user.user_email}</p>
              </div>
            </div>

            {/* User Details */}
            <p className="text-gray-700">
              <span className="font-bold ">User ID:</span> {user.user_id}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Role:</span> {user.user_role}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Phone:</span> {user.user_phone}
            </p>
            <p><span className="font-bold">Status:</span> {user.user_is_active}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
