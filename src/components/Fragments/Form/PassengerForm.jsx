import React, { useState } from "react";
import InputForm from "./InputForm";
import { useForm } from "react-hook-form";

const PassengerForm = ({ index, passenger, onChange, onRemove }) => {
  const [isActive, setIsActive] = useState(false);
  const {register} = useForm()

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="mt-4">
      <h3 className="mb-4 rounded-t-xl bg-[#3C3C3C] px-4 py-2 text-lg font-medium text-white">
        Data Diri Penumpang {index + 1}
      </h3>

      <InputForm
        label="Nama Lengkap"
        placeholder="Masukkan nama depan Anda"
        {...register(`passengers.${index}.first_name`, {
          required: "Nama Depan Wajib diisi"
        })}
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
        label="Nama Keluarga"
        {...register(`passengers.${index}.last_name`, {
          required: "Nama Keluarga Wajib diisi"
        })}
        placeholder="Masukkan nama keluarga Anda"
      />

      <InputForm
        name={`passengers.${index}.birth_date`}
        label="Tanggal Lahir"
        type="date"
        {...register(`passengers.${index}.birth_date`, {
          required: "Wajib diisi",
          max: {
            value: new Date().toISOString().split("T")[0],
            message: "Invalid birth date",
          }
        })}
      />

      <InputForm
        label="Kewarganegaraan"
        placeholder="Ex: Indonesia"
        {...register(`passengers.${index}.nationality`, {
          required: "Wajib diisi"
        })}
      />

      <InputForm
        label="KTP/Paspor"
        placeholder=""
        {...register(`passengers.${index}.identityNumber`, {
          required: "Nama Keluarga Wajib diisi"
        })}
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
        {...register(`passengers.${index}.identityNumber`, {
          required: "Nama Keluarga Wajib diisi"
        })}
        label="Berlaku Sampai"
        type="date"
      />
    </div>
  );
};

export default PassengerForm;
