import DynamicBanner from "../components/Elements/Banner/DynamicBanner";
import SkyTicketBanner from "../assets/images/skyticket-banner.png";
import Logo from "../components/Elements/Logo/Logo";
import ResetPasswordForm from "../components/Fragments/Form/ResetPasswordRequestForm";

const ResetPasswordRequestPage = () => {
  return (
    <div className="flex h-screen">
      <div className="relative h-full w-1/2">
        <DynamicBanner backgroundImage={SkyTicketBanner}>
          <div className="absolute-center translate-y-[-50%]">
            <Logo className="size-48" />
          </div>
        </DynamicBanner>
      </div>

      <div className="flex w-1/2 items-center justify-center p-8">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPasswordRequestPage;
