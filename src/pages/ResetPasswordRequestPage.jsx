import DynamicBanner from "../components/Elements/Banner/DynamicBanner";
import SkyTicketBanner from "../../public/assets/images/skyticket-banner.png";
import Logo from "../components/Elements/Logo/Logo";
import ResetPasswordForm from "../components/Fragments/Form/ResetPasswordRequestForm";
import ResetPasswordRequestForm from "../components/Fragments/Form/ResetPasswordRequestForm";

const ResetPasswordRequestPage = () => {
  return (
    <div className="flex h-screen overflow-hidden lg:flex-row">
      <div className="relative hidden h-full w-1/2 lg:block">
        <DynamicBanner backgroundImage={SkyTicketBanner}>
          <div className="absolute-center translate-y-[-10%] px-6">
            <Logo className="size-48" />
          </div>
        </DynamicBanner>
      </div>

      <div className="flex w-full items-center justify-center p-4 sm:p-6 lg:w-1/2">
        <ResetPasswordRequestForm showLogoOnMobile={true} />
      </div>
    </div>
  );
};

export default ResetPasswordRequestPage;
