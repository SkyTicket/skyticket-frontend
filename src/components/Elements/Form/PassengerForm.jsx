import React, { useState } from "react";
import InputForm from "./InputForm";

const PassengerForm = ({ index }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="mt-4">
      <h3 className="mb-4 rounded-t-xl bg-[#3C3C3C] px-4 py-2 text-lg font-medium text-white">
        Data Diri Penumpang {index + 1} - Adult
      </h3>

      <InputForm
        name={`passengers.${index}.first_name`}
        label="Nama Lengkap"
        placeholder="Masukkan nama depan Anda"
        validation={{
          required: "Nama Lengkap Wajib Diisi",
        }}
      />

      <div className="mb-4 flex justify-between">
        <span className="text-black">Punya Nama Keluarga</span>
        <span className="text-purple-600">
          <div
            className={`flex h-8 w-14 cursor-pointer items-center rounded-full p-1 transition-all ${
              isActive ? "bg-[#4B1979]" : "bg-gray-300"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`h-6 w-6 transform rounded-full bg-white shadow-md transition-transform ${
                isActive ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </span>
      </div>

      <InputForm
        name={`passengers.${index}.last_name`}
        label="Nama Keluarga"
        placeholder="Masukkan nama keluarga Anda"
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
        placeholder="Ex: Indonesia"
        validation={{
          required: "Wajib Diisi",
        }}
      />

      <InputForm
        name={`passengers.${index}.nationality`}
        label="KTP/Paspor"
        placeholder=""
        validation={{
          required: "Wajib Diisi",
        }}
      />

      <div className="mb-4 flex flex-col">
        <label className="mb-1 text-sm font-bold text-[#4B1979]">
          Negara Penerbit
        </label>
        <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#3C3C3C] focus:outline-none focus:ring-2 focus:ring-purple-500">
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
