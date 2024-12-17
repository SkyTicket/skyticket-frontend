import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import Logo from "../../Elements/Logo/Logo";
import useRegister from "../../../hooks/useRegister";

const RegisterForm = ({ showLogoOnMobile = false }) => {
  const { register: performRegister } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const passwordValue = watch("password");

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const handleRegister = async (data) => {
    const { name, email, phone, password } = data;

    setIsLoading(true);
    const success = await performRegister(name, email, phone, password);

    if (success) {
      navigate("/otp", { state: { email } });
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="w-full max-w-sm px-4 sm:max-w-md md:px-8"
    >
      {showLogoOnMobile && (
        <div className="mb-6 lg:hidden">
          <Logo className="size-24" />
        </div>
      )}

      <h2 className="mb-6 text-2xl font-bold text-black">Daftar</h2>

      <Input
        label="Nama"
        type="text"
        id="name"
        {...register("name", {
          required: "Nama wajib diisi",
          minLength: {
            value: 3,
            message: "Nama minimal 3 karakter",
          },
          pattern: {
            value: /^[a-zA-Z\s]+$/,
            message: "Nama hanya boleh berisi huruf dan spasi",
          },
        })}
        placeholder="Nama Lengkap"
        error={errors.name}
      />

      <Input
        label="Email"
        type="email"
        id="email"
        {...register("email", {
          required: "Email wajib diisi",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Format email tidak valid",
          },
        })}
        placeholder="Contoh: johndoe@gmail.com"
        error={errors.email}
      />

      <Input
        label="Nomor Telepon"
        type="text"
        id="phone"
        {...register("phone", {
          required: "Nomor telepon wajib diisi",
          pattern: {
            value: /^\d+$/,
            message: "Nomor telepon hanya boleh berisi angka",
          },
          minLength: {
            value: 10,
            message: "Nomor telepon minimal 10 digit",
          },
        })}
        placeholder="+62 . . ."
        error={errors.phone}
      />

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm text-black">Password</label>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Password wajib diisi",
              minLength: {
                value: 8,
                message: "Password minimal 8 karakter",
              },
            })}
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
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm text-black">Konfirmasi Password</label>
        </div>
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Konfirmasi password wajib diisi",
              validate: (value) =>
                value === passwordValue || "Password tidak cocok",
            })}
            placeholder="Masukkan ulang password"
            error={errors.confirmPassword}
          />
          <div
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-1 right-5 flex cursor-pointer items-center text-[#8A8A8A] hover:text-gray-500"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowConfirmPassword(!showConfirmPassword);
              }
            }}
          >
            {showConfirmPassword ? (
              <FontAwesomeIcon icon={faEye} className="size-6" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="size-6" />
            )}
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full rounded-2xl font-medium"
        disabled={isLoading}
      >
        {isLoading ? "Memproses..." : "Daftar"}
      </Button>

      <p className="mt-10 text-center text-black">
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
