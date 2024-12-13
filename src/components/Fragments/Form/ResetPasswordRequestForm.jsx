import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import { requestResetPassword } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";
const ResetPasswordRequestForm = () => {
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
      alert(response.message || "Email berhasil dikirim.");
      navigate("/otp", { state: { email: data.email } });

    } catch (error) {
      console.error("Error saat submit:", error);
      alert(error.message || "Terjadi kesalahan.");
    }
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

      <Button onClick={() => console.log("Button clicked")} type="submit" className="w-full rounded-2xl font-medium">
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
