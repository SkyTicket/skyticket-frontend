import React from "react";
import OtpForm from "../components/Fragments/Form/OtpForm";
import Navbar from "../components/Fragments/Navbar/Navbar";
import { Link } from "react-router-dom";

const OtpPage = () => {
  const handleOtpSubmit = (otp) => {
    alert(`Kode OTP yang dimasukkan: ${otp}`);
  };

  const handleResendOtp = () => {
    alert("Kode OTP telah dikirim ulang!");
  };

  return (
    <>
      <Navbar showSearchBar={false} showLoginButton={false} />
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="mb-4 mt-20 flex w-full max-w-lg items-center gap-4 md:mt-20">
          <Link to="/register">
            <img
              alt="Arrow Left Icon"
              src="/src/assets/icons/arrow-left.svg"
              className="w-auto"
            />
          </Link>
          <h1 className="flex-grow text-xl font-bold text-black md:text-2xl">
            Masukkan OTP
          </h1>
        </div>
        <OtpForm
          email="j*****@gmail.com"
          onSubmit={handleOtpSubmit}
          onResendOtp={handleResendOtp}
        />
      </div>
    </>
  );
};

export default OtpPage;
