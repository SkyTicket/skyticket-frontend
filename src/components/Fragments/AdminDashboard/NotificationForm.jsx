import React, { useState } from "react";
import useNotifications from "../../../hooks/useNotifications";
import toast from "react-hot-toast";

const NotificationForm = () => {
  const { sendNotification, isSending, sendError } = useNotifications();
  const [formData, setFormData] = useState({
    user_id: "",
    notification_type: "",
    notification_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendNotification(formData);
      toast.success("Notification sent successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">User ID</label>
        <input
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <input
          name="notification_type"
          value={formData.notification_type}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="notification_message"
          value={formData.notification_message}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSending}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded shadow hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
      >
        {isSending ? "Sending..." : "Send Notification"}
      </button>
      {sendError && <p className="text-red-500">Error: {sendError}</p>}
    </form>
  );
};

export default NotificationForm;
