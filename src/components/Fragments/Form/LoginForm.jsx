import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import Logo from "../../Elements/Logo/Logo";
import useLogin from "../../../hooks/useLogin";

const LoginForm = ({ showLogoOnMobile = false }) => {
  const { login } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const handleLogin = async (data) => {
    const { email, password } = data;

    setIsLoading(true);
    const success = await login(email, password);

    if (success) {
      navigate("/");
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full max-w-sm px-4 sm:max-w-md md:px-8"
    >
      {showLogoOnMobile && (
        <div className="mb-6 lg:hidden">
          <Logo className="size-24" />
        </div>
      )}

      <h2 className="mb-6 text-2xl font-bold text-black">Masuk</h2>

      <Input
        label="Email/No Telepon"
        type="email"
        id="email"
        {...register("email", {
          required: "Email wajib diisi",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Alamat email tidak valid",
          },
        })}
        placeholder="Contoh: johndoe@gmail.com"
        error={errors.email}
      />

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm text-black">Password</label>
          <Link
            to="/reset-password/request"
            className="text-sm font-medium text-[#7126B5] hover:text-purple-600"
          >
            Lupa Kata Sandi
          </Link>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Password wajib diisi",
            })}
            placeholder="Masukkan password"
            error={errors.password}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-5 flex cursor-pointer items-center text-[#8A8A8A] hover:text-gray-500"
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

      <Button
        type="submit"
        className="w-full rounded-2xl font-medium"
        disabled={isLoading}
      >
        {isLoading ? "Memproses..." : "Masuk"}
      </Button>

      <p className="mt-10 text-center text-black">
        Belum punya akun?{" "}
        <Link
          to="/register"
          className="font-bold text-[#7126B5] hover:text-purple-600"
        >
          Daftar di sini
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
