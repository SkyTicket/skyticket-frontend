import React, { useState, useEffect } from "react";
import OtpInput from "../../Elements/Input/OtpInput";
import Button from "../../Elements/Button/Button";

const OtpForm = ({ email, onSubmit, onResendOtp }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1);
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    onSubmit(otp.join(""));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="mb-11 pt-6 text-center text-[#151515]">
          Ketik 6 digit kode yang dikirimkan ke&nbsp;
          <span className="font-bold">{email}</span>
        </p>
        <div className="mb-6 flex gap-4">
          {otp.map((value, index) => (
            <OtpInput
              key={index}
              id={`otp-input-${index}`}
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
            />
          ))}
        </div>
        <p className="mb-24 text-[#151515]">
          {timer > 0 ? (
            <>Kirim Ulang OTP dalam {timer} detik</>
          ) : (
            <a
              onClick={onResendOtp}
              className="cursor-pointer font-bold text-[#FF0000] hover:text-red-600"
            >
              Kirim Ulang
            </a>
          )}
        </p>
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full px-6 py-3 font-medium"
        >
          Simpan
        </Button>
      </div>
    </>
  );
};

export default OtpForm;
