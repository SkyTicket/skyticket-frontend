import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";

const ResetPasswordRequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Reset password email dikirim ke:", data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      <h2 className="mb-6 text-2xl font-bold text-black">Reset Password Request</h2>

      <Input
        label="Email"
        type="email"
        placeholder="Masukkan email Anda"
        error={errors.email?.message}
        {...register("email", {
          required: "Email tidak boleh kosong",
          validate: {
            notEmpty: (value) => value.trim() !== "" || "Email tidak boleh kosong",
            validFormat: (value) =>
              /\S+@\S+\.\S+/.test(value) || "Format email tidak valid",
          },
        })}
      />

      <Button onClick={handleSubmit(onSubmit)} type="submit" className="w-full rounded-2xl font-medium">
        Kirim
      </Button>

      <p className="mt-10 text-center text-sm text-black">
        Sudah ingat kata sandi Anda?{" "}
        <Link to="/login">
          <a href="#" className="font-bold text-[#7126B5] hover:text-purple-600">
            Masuk
          </a>
        </Link>
      </p>
    </form>
  );
};

export default ResetPasswordRequestForm;
