import React from 'react';
import useUsers from '../../../hooks/useUsers';

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-6 bg-gray-200 rounded-md animate-pulse w-3/4 mx-auto"
          ></div>
        ))}
      </div>
    );
  }
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <ul className="divide-y divide-gray-200">
      {users.map((user) => (
        <li key={user.user_id} className="p-4">
          <p><span className="font-bold">User ID:</span> {user.user_id}</p>
          <p><span className="font-bold">Name:</span> {user.user_name}</p>
          <p><span className="font-bold">Email:</span> {user.user_email}</p>
          <p><span className="font-bold">Role:</span> {user.user_role}</p>
          <p><span className="font-bold">Phone:</span> {user.user_phone}</p>
          <p><span className="font-bold">Status:</span> {user.user_is_active}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
