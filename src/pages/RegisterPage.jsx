import DynamicBanner from "../components/Elements/Banner/DynamicBanner";
import SkyTicketBanner from "../../public/assets/images/skyticket-banner.png";
import Logo from "../components/Elements/Logo/Logo";
import RegisterForm from "../components/Fragments/Form/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen overflow-hidden lg:flex-row">
      <div className="relative hidden w-1/2 lg:block">
        <DynamicBanner backgroundImage={SkyTicketBanner}>
          <div className="absolute-center translate-y-[-10%] px-6">
            <Logo className="size-48" />
          </div>
        </DynamicBanner>
      </div>

      <div className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:w-1/2">
        <RegisterForm showLogoOnMobile />
      </div>
    </div>
  );
};

export default RegisterPage;
