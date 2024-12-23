import { useEffect } from "react";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Progress from "../components/Elements/Header/Progress";
import DetailOrderFlight from "../components/Fragments/OrderHistory/DetailOrderFlight";
import { paymentService } from "../services/payment.service";
import { useSearchParams } from "react-router-dom";

  const PaymentView = () => {
    const [search] = useSearchParams()
    const bookingId = search.get('bookingId')
    console.log(bookingId)
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
        const response = await paymentService({bookingId: bookingId});
        console.log(response);
        const { token } = response;
        window.snap.embed(token, {
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
              <DetailOrderFlight
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentView;