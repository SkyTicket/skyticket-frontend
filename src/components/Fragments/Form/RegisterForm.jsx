import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Nama tidak boleh kosong";
    }

    if (!formData.email) {
      newErrors.email = "Email tidak boleh kosong";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.phone) {
      newErrors.phone = "Nomor telepon tidak boleh kosong";
    }

    if (!formData.password) {
      newErrors.password = "Password tidak boleh kosong";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password tidak boleh kosong";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password dan Konfirmasi Password tidak cocok";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registrasi berhasil:", formData);
    }
    navigate("/otp");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="mb-6 text-2xl font-bold text-black">Daftar</h2>

      <Input
        label="Nama"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nama Lengkap"
        error={errors.name}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Contoh: johndoe@gmail.com"
        error={errors.email}
      />

      <Input
        label="Nomor Telepon"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+62 . . ."
        error={errors.phone}
      />

      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Password</label>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            error={errors.password}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-1 right-5 flex cursor-pointer items-center text-[#8A8A8A] hover:text-gray-500"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowPassword(!showPassword);
              }
            }}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} className="size-6" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="size-6" />
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">
            Konfirmasi Password
          </label>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Masukkan ulang password"
            error={errors.confirmPassword}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-1 right-5 flex cursor-pointer items-center text-[#8A8A8A] hover:text-gray-500"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowPassword(!showPassword);
              }
            }}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} className="size-6" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="size-6" />
            )}
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full rounded-2xl font-medium">
        Daftar
      </Button>

      <p className="mt-10 text-center text-sm text-black">
        Sudah punya akun?{" "}
        <Link
          to="/login"
          className="font-bold text-[#7126B5] hover:text-purple-600"
        >
          Masuk di sini
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
