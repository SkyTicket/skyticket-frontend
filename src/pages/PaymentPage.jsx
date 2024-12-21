import { useEffect } from "react";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Progress from "../components/Elements/Header/Progress";
import DetailFlight from "../components/Fragments/OrderHistory/DetailFlight";

const PaymentView = () => {
  const insertSnapScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
      script.setAttribute(
        "data-client-key",
        import.meta.env.VITE_CLIENT_MIDTRANS,
      );
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    try {
      // const response = await axiosInstance.post("/orders");

      const { token } = response.data;
      console.log(token.token);
      window.snap.embed(token.token, {
        embedId: "snap-container",
        onSuccess: function (result) {
          alert("payment success!");
          console.log(result);
        },
        onPending: function (result) {
          alert("wating your payment!");
          console.log(result);
        },
        onError: function (result) {
          alert("payment failed!");
          console.log(result);
        },
        onClose: function () {
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    insertSnapScript();
    pay();
  }, []);

  return (
    <div>
      <Navbar />
      <Progress stage2={""} />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div
              className="m-2 mx-auto w-[70vw] lg:h-[60vh] lg:w-[40vw]"
              id="snap-container"
            ></div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6">
              <h2 className="mb-4 text-xl font-bold">Detail Penerbangan</h2>
              <DetailFlight
                departure_time="07:00"
                departure_date="27 November 2024"
                departure_airport="Soekarno-Hatta"
                return_time="11:00"
                return_date="27 November 2024"
                return_airport="Melbourne International Airport"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentView;
