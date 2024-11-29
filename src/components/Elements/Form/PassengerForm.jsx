import React, { useState } from "react";
import InputForm from "./InputForm";

const PassengerForm = ({ index }) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-4 bg-black text-white px-4 py-2 rounded-t-xl">
                Data Diri Penumpang {index + 1} - Adult
            </h3>

            <InputForm
                name={`passengers.${index}.first_name`}
                label="Nama Lengkap"
                placeholder=""
                validation={{
                    required: "Nama Lengkap Wajib Diisi",
                }}
            />

            <div className="flex justify-between mb-4">
                <span className="font-bold">Punya Nama Keluarga</span>
                <span className="text-purple-600">
                <div
                    className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all ${
                        isActive ? "bg-green-500" : "bg-gray-300"
                    }`}
                    onClick={handleToggle}
                >
                    <div
                        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                            isActive ? "translate-x-6" : "translate-x-0"
                        }`}
                    />
                </div>
                </span>
            </div>

            <InputForm
                name={`passengers.${index}.last_name`}
                label="Nama Keluarga"
                placeholder=""
                validation={{}}
            />

            <InputForm
                name={`passengers.${index}.birth_date`}
                label="Tanggal Lahir"
                type="date"
                validation={{
                    required: "Wajib Diisi",
                    max: {
                        value: new Date().toISOString().split("T")[0],
                        message: "Invalid birth date",
                    },
                }}
            />
            
            <InputForm
                name={`passengers.${index}.nationality`}
                label="Kewarganegaraan"
                placeholder=""
                validation={{
                    required: "Wajib Diisi"
                }}
            />

            <InputForm
                name={`passengers.${index}.nationality`}
                label="KTP/Paspor"
                placeholder=""
                validation={{
                    required: "Wajib Diisi"
                }}
            />

            <div className="flex flex-col mb-4">
                <label className=" font-semibold mb-2">
                Negara Penerbit
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white">
                <option value="">Pilih negara penerbit</option>
                <option value="indonesia">Indonesia</option>
                <option value="malaysia">Malaysia</option>
                <option value="singapore">Singapore</option>
                </select>
            </div>

            <InputForm
                name={`passengers.${index}.birth_date`}
                label="Berlaku Sampai"
                type="date"
            />
        </div>
    );
};

export default PassengerForm;
