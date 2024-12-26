import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Progress from "../components/Elements/Header/Progress";
import SelectSeat from "../components/Fragments/Form/SelectSeatForm";
import DetailOrderFlight from "../components/Fragments/OrderHistory/DetailOrderFlight";
import CustomerForm from "../components/Fragments/Form/CustomerForm";
import PassengerForm from "../components/Fragments/Form/PassengerForm";
import { useTicketBooking } from "../hooks/useTicketBooking";

const INITIAL_BOOKER = {
  bookerName: "",
  bookerEmail: "",
  bookerPhone: "",
};

const TIME_LIMIT = 15 * 60;

const PageOrder = () => {
  const [search] = useSearchParams();
  const Adult = search.get("adult");
  const Child = search.get("child");
  const SeatClass = search.get("seatClass");
  const Baby = search.get("baby");
  const Flight = search.get("flightId");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { createTicketOrder, isLoading, bookingResult } = useTicketBooking();
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  // Get passenger counts from query params
  const adult = parseInt(searchParams.get("adult")) || 0;
  const child = parseInt(searchParams.get("child")) || 0;
  const baby = parseInt(searchParams.get("baby")) || 0;
  const totalPassengers = adult + child;

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      passengers: Array(totalPassengers).fill({
        title: "Mr",
        name: "",
        familyName: "",
        dateOfBirth: "",
        nationality: "",
        identityNumber: "",
        issuingCountry: "",
        validUntil: "",
        selected_seat: "",
        type: "",
        // category: "adult"
      }),
      bookerData: INITIAL_BOOKER,
    },
  });

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  // Watch form values for debugging
  const formValues = watch();

  // Set initial passenger types
  useEffect(() => {
    const passengers = methods.getValues("passengers");
    const updatedPassengers = passengers.map((passenger, index) => ({
      ...passenger,
      type: index < adult ? "adult" : "child",
    }));
    methods.reset({
      passengers: updatedPassengers,
      bookerData: methods.getValues("bookerData"),
    });
  }, [adult, methods]);

  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(
      mins % 60,
    ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleBookerChange = (field, value) => {
    setValue(`bookerData.${field}`, value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const validateFormData = (formData) => {
    const { passengers, bookerData } = formData;
    const validationErrors = [];

    // Validate passenger data
    passengers.forEach((passenger, index) => {
      if (!passenger.title || !passenger.name || !passenger.familyName) {
        validationErrors.push(`Data penumpang ${index + 1} belum lengkap`);
      }
      if (!passenger.selected_seat) {
        validationErrors.push(
          `Kursi untuk penumpang ${index + 1} belum dipilih`,
        );
      }
      if (
        !passenger.dateOfBirth ||
        !passenger.nationality ||
        !passenger.identityNumber
      ) {
        validationErrors.push(
          `Informasi identitas penumpang ${index + 1} belum lengkap`,
        );
      }
    });

    // Validate booker data
    if (
      !bookerData.bookerName ||
      !bookerData.bookerEmail ||
      !bookerData.bookerPhone
    ) {
      validationErrors.push("Data pemesan belum lengkap");
    }

    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join("\n"));
    }
  };

  const onSubmit = async (formData) => {
    try {
      console.log("Form data before validation:", formData);

      // Validate data
      validateFormData(formData);

      // Format data for API
      const orderData = {
        seats: formData.passengers.map((passenger) => ({
          id: passenger.selected_seat,
        })),
        passengers: formData.passengers.map((passenger) => ({
          title: passenger.title,
          name: passenger.name,
          familyName: passenger.familyName,
          dateOfBirth: passenger.dateOfBirth,
          nationality: passenger.nationality,
          identityNumber: passenger.identityNumber,
          issuingCountry: passenger.issuingCountry,
          validUntil: passenger.validUntil,
          // category: "adult"
        })),
        ...formData.bookerData,
      };

      console.log("Submitting order data:", orderData);

      const result = await createTicketOrder(orderData);
      console.log("Booking successful:", result);

      toast.success("Pemesanan berhasil!");
      navigate(
        `/payment?flightId=${Flight}&seatClass=${SeatClass}&adult=${Adult}&child=${Child}&baby=${Baby}&bookingCode=${result.bookingCode}&bookingId=${result.data[0]?.booking_id}`,
      );
    } catch (err) {
      console.error("Booking failed:", err);
      toast.error(err.message || "Pemesanan gagal. Silakan coba lagi.");
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl">Memproses pemesanan Anda...</div>
      </div>
    );
  }

  // Success state
  if (bookingResult) {
    return (
      <div className="mx-auto max-w-2xl p-6">
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-green-800">
            Pemesanan Berhasil!
          </h2>
          <p className="text-green-700">
            Kode pemesanan Anda:{" "}
            <span className="font-mono font-bold">
              {bookingResult.bookingCode}
            </span>
          </p>
        </div>
      </div>
    );
  }

  // Debug information
  console.log("Current form values:", formValues);
  console.log("Form errors:", errors);

  return (
    <>
      <Navbar />
      <Progress />
      <div className="rounded-lg bg-red-500 p-2 text-center text-white">
        Selesaikan dalam {formatTime(timeLeft)}
      </div>
      <FormProvider {...methods}>
        <div className="mx-auto max-w-7xl p-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <div className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-black">
                  Isi Data Pemesan
                </h2>
                <CustomerForm onChange={handleBookerChange} />
              </div>

              <div className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-black">
                  Isi Data Penumpang
                </h2>
                {watch("passengers").map((_, index) => (
                  <div
                    key={index}
                    className="mb-6 border-b pb-6 last:border-b-0"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-black">
                      Data Penumpang {index + 1}
                      {index < adult ? " (Dewasa)" : " (Anak)"}
                    </h3>
                    <PassengerForm index={index} />
                  </div>
                ))}
              </div>

              <SelectSeat />
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6">
                <h2 className="mb-4 text-lg font-bold text-[#151515]">
                  Detail Penerbangan
                </h2>
                <DetailOrderFlight />
              </div>

              <div className="mx-auto w-[95%]">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-500 px-4 py-3 text-white transition-colors hover:bg-red-600 disabled:bg-gray-400"
                  disabled={isLoading}
                >
                  {isLoading ? "Memproses..." : "Lanjut Bayar"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </FormProvider>
    </>
  );
};

export default PageOrder;
