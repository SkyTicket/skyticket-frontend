import React, { useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PassengerForm from "../components/Fragments/Form/PassengerForm";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Progress from "../components/Elements/Header/Progress";
import SelectSeat from "../components/Fragments/Form/SelectSeat";
import CustomerForm from "../components/Fragments/Form/CustomerForm";
import DetailFlight from "../components/Fragments/DetailFlight";

const PageOrder = () => {
  const navigate = useNavigate();
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
      <Progress className="" />
      <FormProvider {...methods}>
        <div className="mx-auto max-w-7xl p-4">
          <form className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              {/* Rest of your existing form components */}
              <div className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-black">
                  Isi Data Pemesan
                </h2>
                <CustomerForm />
              </div>

              <div className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-black">
                  Isi Data Penumpang
                </h2>
                {fields.map((field, index) => (
                  <PassengerForm key={field.id} index={index} />
                ))}
              </div>
              <SelectSeat />
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
                  type="submit"
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
