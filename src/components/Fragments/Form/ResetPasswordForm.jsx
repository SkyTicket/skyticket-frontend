import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (newPassword.length < 8) {
      newErrors.newPassword = "Password harus minimal 8 karakter";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password harus diisi";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Konfirmasi password tidak sesuai";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Password berhasil diubah:", {
        newPassword,
        confirmPassword,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="mb-6 text-2xl font-bold text-black">Reset Password</h2>

      {/* New Password */}
      <label className="relative block text-black dark:text-white">
        {" "}
        Masukkan password baru
        <div className="relative">
          <Input
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="********"
            error={errors.newPassword}
          />
        </div>
        <div
          onClick={() => setShowNewPassword(!showNewPassword)}
          style={{
            position: "absolute",
            right: "1em",
            top: "50%",
            transform: "translateY(-0%)",
            cursor: "pointer",
            color: "#8A8A8A",
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowNewPassword(!showNewPassword);
            }
          }}
        >
          {showNewPassword ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </div>
      </label>

      {/* Confirm Password */}
      <label className="relative block text-black dark:text-white">
        {" "}
        Konfirmasi Password Baru
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            error={errors.confirmPassword}
          />
        </div>
        <div
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          style={{
            position: "absolute",
            right: "1em",
            top: "50%",
            transform: "translateY(-0%)",
            cursor: "pointer",
            color: "#8A8A8A",
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowConfirmPassword(!showConfirmPassword);
            }
          }}
        >
          {showConfirmPassword ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </div>
      </label>

      <Button
        type="submit"
        onClick={handleSubmit}
        disabled={Object.keys(errors).length > 8}
        className={`w-full rounded-2xl font-medium ${
          Object.keys(errors).length > 0 ? "bg-gray-400" : "bg-purple-500"
        }`}
      >
        Simpan
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
