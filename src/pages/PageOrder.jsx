import React, { useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PassengerForm from "../components/Elements/Form/PassengerForm";
import Navbar from "../components/Fragments/Navbar/Navbar";
import Progress from "../components/Elements/Header/Progress";
import SelectSeat from "../components/Elements/Form/SelectSeat";
import CustomerForm from "../components/Elements/Form/CustomerForm";
import DetailFlight from "../components/Fragments/DetailFlight";
import DetFlight from "../components/elements/detailPage/detailFlight";

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
            <Navbar/>
            <Progress className="" />
            <FormProvider {...methods}>
                <div className="max-w-7xl mx-auto p-4">

                    <form
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                        <div className="space-y-6">
                            {/* Rest of your existing form components */}
                            <div className="bg-white rounded-lg border p-6">
                                <h2 className="font-bold text-xl mb-4">
                                    Isi Data Pemesan
                                </h2>
                                <CustomerForm />
                            </div>

                            <div className="bg-white rounded-lg border p-6">
                                <h2 className="font-bold text-xl mb-4">
                                    Isi Data Penumpang
                                </h2>
                                {fields.map((field, index) => (
                                    <PassengerForm
                                        key={field.id}
                                        index={index}
                                    />
                                ))}
                            </div>
                            <SelectSeat />
                        </div>
                        

                        {/* Right Column - Flight Details & Payment */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-lg p-6">
                                <h2 className="font-bold text-xl mb-4">
                                    Detail Penerbangan
                                </h2>
                                <DetailFlight/>
                            </div>

                            <div className="w-[95%] mx-auto">
                                <button
                                    type="submit"
                                    className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors"
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
