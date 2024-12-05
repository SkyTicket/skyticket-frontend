import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";

const ResetPasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!oldPassword) {
      newErrors.oldPassword = "Password lama tidak boleh kosong";
    }

    if (!newPassword) {
      newErrors.newPassword = "Password baru tidak boleh kosong";
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password baru harus minimal 6 karakter";
    }

    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Konfirmasi password tidak sesuai";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Password berhasil diubah:", { oldPassword, newPassword });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="mb-6 text-2xl font-bold text-black">Reset Password</h2>

      {/* Old Password */}
      <label style={{ position: "relative", display: "block" }}>
        Masukkan password lama
        <Input
          type={showOldPassword ? "text" : "password"}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="********"
          error={errors.oldPassword}
        />
        <div
          onClick={() => setShowOldPassword(!showOldPassword)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-0%)",
            cursor: "pointer",
            color: "#8A8A8A",
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowOldPassword(!showOldPassword);
            }
          }}
        >
          {showOldPassword ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </div>
        {errors.oldPassword && (
          <p style={{ marginTop: "8px", fontSize: "12px", color: "red" }}>
            {errors.oldPassword}
          </p>
        )}
      </label>

      {/* New Password */}
      <label style={{ position: "relative", display: "block" }}>
        Masukkan password baru
        <Input
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="********"
          error={errors.newPassword}
        />
        <div
          onClick={() => setShowNewPassword(!showNewPassword)}
          style={{
            position: "absolute",
            right: "10px",
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
        {errors.newPassword && (
          <p style={{ marginTop: "8px", fontSize: "12px", color: "red" }}>
            {errors.newPassword}
          </p>
        )}
      </label>

      {/* Confirm Password */}
      <label style={{ position: "relative", display: "block" }}>
        Konfirmasi Password Baru
        <Input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="********"
          error={errors.confirmPassword}
        />
        <div
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          style={{
            position: "absolute",
            right: "10px",
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
        {errors.confirmPassword && (
          <p style={{ marginTop: "8px", fontSize: "12px", color: "red" }}>
            {errors.confirmPassword}
          </p>
        )}
      </label>

      <Button type="submit" className="w-full rounded-2xl font-medium">
        Simpan
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
