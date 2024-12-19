import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import { requestResetPassword } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../../Elements/Logo/Logo";
const ResetPasswordRequestForm = (showLogoOnMobile = false) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Data yang dikirim:", data.email);
    try {
      const response = await requestResetPassword(data.email);
      toast.success(response.message || "Email berhasil dikirim.");
      setTimeout(() => {
        navigate("/reset-password", { state: { email: data.email } });
      }, 3000);
    } catch (error) {
      console.error("Error saat submit:", error);
      toast.error(error.message || "Terjadi kesalahan.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      {showLogoOnMobile && (
        <div className="mb-20 lg:hidden">
          <Logo className="size-24" />
        </div>
      )}

      <h2 className="mb-6 text-2xl font-bold text-black">
        Reset Password Request
      </h2>

      <Input
        label="Email"
        type="email"
        placeholder="Masukkan email Anda"
        error={errors.email?.message}
        {...register("email", {
          required: "Email tidak boleh kosong",
          validate: {
            notEmpty: (value) =>
              value.trim() !== "" || "Email tidak boleh kosong",
            validFormat: (value) =>
              /\S+@\S+\.\S+/.test(value) || "Format email tidak valid",
          },
        })}
      />

      <Button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        className={`w-full rounded-2xl font-medium ${
          Object.keys(errors).length > 0 ? "bg-gray-400" : "bg-purple-500"
        }`}      >
        Kirim
      </Button>

      <p className="mt-10 text-center text-sm text-black">
        Sudah ingat kata sandi Anda?{" "}
        <Link to="/login">
          <a
            href="#"
            className="font-bold text-[#7126B5] hover:text-purple-600"
          >
            Masuk
          </a>
        </Link>
      </p>
    </form>
  );
};

export default ResetPasswordRequestForm;
