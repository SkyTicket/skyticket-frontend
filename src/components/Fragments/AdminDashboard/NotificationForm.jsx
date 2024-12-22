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
      toast.error("Failed to send notification");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          User ID
        </label>
        <input
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
          required
          placeholder="Enter the user's ID"
          className="mt-1 block w-full rounded-xl border border-gray-200 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Notification Type
        </label>
        <select
          name="notification_type"
          value={formData.notification_type}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-xl border border-gray-200 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-200"
        >
          <option value="" disabled>
            Select notification type
          </option>
          <option value="PROMO">PROMO</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="notification_message"
          value={formData.notification_message}
          onChange={handleChange}
          required
          placeholder="Enter your message here"
          className="mt-1 block w-full rounded-xl border border-gray-200 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-200"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full rounded-xl bg-[#7126B5] px-4 py-3 text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {isSending ? "Sending..." : "Send Notification"}
      </button>

      {sendError && <p className="text-sm text-red-500">Error: {sendError}</p>}
    </form>
  );
};

export default NotificationForm;
