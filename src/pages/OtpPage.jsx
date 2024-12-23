import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpForm from "../components/Fragments/Form/OtpForm";
import Navbar from "../components/Fragments/Navbar/Navbar";

const OtpPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = Cookies.get("userEmail");

    if (!storedEmail) {
      navigate("/register");
      return;
    }

    setEmail(storedEmail);
  }, [navigate]);

  return (
    <>
      <Navbar showSearchBar={false} showLoginButton={false} />
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="mb-4 mt-20 flex w-full max-w-lg items-center gap-4 md:mt-20">
          <Link to="/register">
            <img
              alt="Arrow Left Icon"
              src="/assets/icons/arrow-left.svg"
              className="w-auto"
            />
          </Link>
          <h1 className="flex-grow text-xl font-bold text-black md:text-2xl">
            Masukkan OTP
          </h1>
        </div>
        <OtpForm email={email} />
      </div>
    </>
  );
};

export default OtpPage;
