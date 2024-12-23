import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "../../Elements/Input/OtpInput";
import Button from "../../Elements/Button/Button";
import { useOtp } from "../../../hooks/useOtp";

const OtpForm = ({ email }) => {
  const [otpCode, setOtpCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  const { isLoading, handleVerifyOtp, handleResendOtp } = useOtp(email, () => {
    navigate("/login");
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const handleOtpChange = (e, index) => {
    const { value } = e.target;

    if (/^\d?$/.test(value)) {
      const newOtpCode = [...otpCode];
      newOtpCode[index] = value;
      setOtpCode(newOtpCode);

      if (value && index < otpCode.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpCode[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const otpString = otpCode.join("");

    if (otpCode.includes("")) {
      toast.error("Kode OTP wajib diisi semua");
      return;
    }

    handleVerifyOtp(otpString);
  };

  return (
    <>
      <div className="flex w-full max-w-sm flex-col items-center px-4 sm:px-6 md:max-w-md">
        <p className="mb-11 pt-6 text-center text-sm text-[#151515] md:text-base">
          Ketik 6 digit kode yang dikirimkan ke&nbsp;
          <span className="font-bold">{email}</span>
        </p>
        <div className="mb-6 flex gap-2 sm:gap-4">
          {otpCode.map((value, index) => (
            <OtpInput
              key={index}
              id={`otp-input-${index}`}
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
            />
          ))}
        </div>
        <p className="mb-16 text-xs text-[#151515] sm:mb-24 md:text-sm">
          {timer > 0 ? (
            <>Kirim Ulang OTP dalam {timer} detik</>
          ) : (
            <a
              onClick={handleResendOtp}
              className="cursor-pointer font-bold text-[#FF0000] hover:text-red-600"
            >
              Kirim Ulang
            </a>
          )}
        </p>
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="mb-20 w-full px-6 py-3 text-sm font-medium md:text-base"
        >
          {isLoading ? "Memproses..." : "Simpan"}
        </Button>
      </div>
    </>
  );
};

export default OtpForm;
