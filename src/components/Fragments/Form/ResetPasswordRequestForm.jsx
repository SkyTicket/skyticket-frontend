import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";

const ResetPasswordRequestForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email tidak boleh kosong";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Reset password email dikirim ke:", email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="mb-6 text-2xl font-bold text-black">Reset Password Request</h2>

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Masukkan email Anda"
        error={errors.email}
      />

      <Button type="submit" className="w-full rounded-2xl font-medium">
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