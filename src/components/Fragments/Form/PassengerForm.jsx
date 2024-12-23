import React, { useState } from "react";
import { countries } from "../../../utils/arrayRegion";
import { Title } from "../../../utils/arrayTitle";
import InputForm from "./InputForm";
import { useForm, useFieldArray } from "react-hook-form";

const PassengerForm = ({ index, control, passenger, onChange, onRemove }) => {
  const [isActive, setIsActive] = useState(false);
  const {register} = useForm()

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const { fields: passengerFields, append: appendPassenger } = useFieldArray({ control, name: "passengers" });


  return (
    <div className="mt-4">
      {passengerFields.map((field,  index) => (
        <>
        <h3 className="mb-4 rounded-t-xl bg-[#3C3C3C] px-4 py-2 text-lg font-medium text-white">
          Data Diri Penumpang {index + 1}
        </h3>
        <div key={field.id}>

          <InputForm
            label="Nama Lengkap"
            placeholder="Masukkan nama depan Anda"
            {...register(`passengers.${index}.name`, {
              required: "Nama Depan Wajib diisi"
            })}
            />

          <InputForm
            label="Nama Keluarga"
            {...register(`passengers.${index}.familyName`, {
              required: "Nama Keluarga Wajib diisi"
            })}
            placeholder="Masukkan nama keluarga Anda"
            />
  
          <InputForm
            label="Tanggal Lahir"
            type="date"
            {...register(`passengers.${index}.dateOfBirth`, {
              required: "Wajib diisi",
              max: {
                value: new Date().toISOString().split("T")[0],
                message: "Tanggal Lahir Invalid",
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
            <select onSelect={(e) => {console.log(e.target.value)}} name={`passengers.${index}.issuingCountry`} className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#3C3C3C] focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Pilih negara penerbit</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
  
          <InputForm
            {...register(`passengers.${index}.validUntil`, {
              required: "Nama Keluarga Wajib diisi"
            })}
            label="Berlaku Sampai"
            type="date"
            />
        </div>
        </>
      ))}
    </div>
  );
};

export default PassengerForm;
