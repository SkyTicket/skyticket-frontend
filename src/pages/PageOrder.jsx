import React, { useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PassengerForm from "../components/Fragments/Form/PassengerForm";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Progress from "../components/Elements/Header/Progress";
import SelectSeat from "../components/Fragments/Form/SelectSeat";
import CustomerForm from "../components/Fragments/Form/CustomerForm";
import DetailFlight from "../components/Fragments/DetailFlight";
import { useTicketBooking } from '../hooks/useTicketBooking';
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
// import { flightDetailService } from "../services/flightsService";


const PageOrder = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    

    const { createTicketOrder, isLoading, error, bookingResult } = useTicketBooking();
    const [passengers, setPassengers] = useState([
      {
        title: '',
        name: '',
        familyName: '',
        dateOfBirth: '',
        nationality: '',
        identityNumber: '',
        issuingCountry: '',
        validUntil: '',
      },
    ]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookerData, setBookerData] = useState({
      bookerName: '',
      bookerEmail: '',
      bookerPhone: '',
    });
  
    // Mock available seats data
    const availableSeats = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      seatNumber: `${Math.floor(i / 4) + 1}${String.fromCharCode(65 + (i % 4))}`,
    }));
  
    const handlePassengerChange = (index, field, value) => {
      const newPassengers = [...passengers];
      newPassengers[index] = { ...newPassengers[index], [field]: value };
      setPassengers(newPassengers);
    };

    const [timeLeft, setTimeLeft] = useState(15 * 60);

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
          mins % 60
      ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
  
    const handleRemovePassenger = (index) => {
      setPassengers(passengers.filter((_, i) => i !== index));
      setSelectedSeats(selectedSeats.filter((_, i) => i !== index));
    };
  
    const handleAddPassenger = () => {
      setPassengers([
        ...passengers,
        {
          title: '',
          name: '',
          familyName: '',
          dateOfBirth: '',
          nationality: '',
          identityNumber: '',
          issuingCountry: '',
          validUntil: '',
        },
      ]);
    };
  
    const handleBookerChange = (field, value) => {
      setBookerData({ ...bookerData, [field]: value });
    };
  
    const handleSeatSelect = (seat) => {
      if (selectedSeats.find(s => s.id === seat.id)) {
        setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
      } else if (selectedSeats.length < passengers.length) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    };

    const { userId } = useContext(AuthContext);

    useEffect(() => {
      console.log("Current User ID:", userId);
    }, [userId]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (selectedSeats.length !== passengers.length) {
        toast('Please select seats for all passengers');
        return;
      }
  
      try {
        const result = await createTicketOrder({
          seats: selectedSeats,
          passengers,
          userId, // This should come from your auth context/state
          ...bookerData,
        });
        
        console.log('Booking successful:', result);
        navigate("/payment")
      } catch (err) {
        console.error('Booking failed:', err);
      }
    };
  
    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Processing your booking...</div>
        </div>
      );
    }
  
    if (bookingResult) {
      return (
        <div className="max-w-2xl mx-auto p-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Booking Successful!
            </h2>
            <p className="text-green-700">
              Your booking code is: <span className="font-mono font-bold">{bookingResult.bookingCode}</span>
            </p>
          </div>
        </div>
      );
    }


  const [passengerCount, setPassengerCount] = useState(1);

  const methods = useForm({
    defaultValues: {
      passengers: Array.from({ length: passengerCount }, () => ({
        first_name: "",
        last_name: "",
        birth_date: "",
        nationality: "",
        ktp_number: "",
        passport: "",
        negara_penerbit: "",
        berlaku_sampai: "",
        selected_seat: "",
      })),
    },
  });

  const { fields } = useFieldArray({
    control: methods.control,
    name: "passengers",
  });

  return (
    <>
      <Navbar />
      <Progress className=""/>
      <div className="text-white bg-red-500 p-2 rounded-lg text-center">
          Selesaikan dalam {formatTime(timeLeft)}
      </div>
      <FormProvider {...methods}>
        <div className="mx-auto max-w-7xl p-4">
          <form
          onSubmit={handleSubmit} 
          className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              {/* Rest of your existing form components */}
              <div className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-black">
                  Isi Data Pemesan
                </h2>
                <CustomerForm bookerData={bookerData} onChange={handleBookerChange} />
              </div>

              <div className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-black">
                  Isi Data Penumpang
                </h2>

                {passengers.map((passenger, index) => (
                  <PassengerForm
                    key={index}
                    index={index}
                    passenger={passenger}
                    onChange={handlePassengerChange}
                    onRemove={handleRemovePassenger}
                  />
                ))}
              </div>
              <SelectSeat
                selectedSeats={selectedSeats}
                availableSeats={availableSeats}
                onSeatSelect={handleSeatSelect}
               />
            </div>

            {/* Right Column - Flight Details & Payment */}
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6">
                <h2 className="mb-4 text-lg font-bold text-[#151515]">
                  Detail Penerbangan
                </h2>
                <DetailFlight />
              </div>

              <div className="mx-auto w-[95%]">
                <button
                  onClick= {() => handleSubmit}
                  className="w-full rounded-lg bg-red-500 px-4 py-3 text-white transition-colors hover:bg-red-600"
                >
                  Lanjut Bayar
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
