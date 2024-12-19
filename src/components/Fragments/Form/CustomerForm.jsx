import React, { useState } from "react";
import InputForm from "./InputForm";
import { useForm } from "react-hook-form";


const CustomerForm = ({ bookerData, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const {register} = useForm()

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="">
      <h3 className="mb-4 rounded-t-xl bg-[#3C3C3C] px-4 py-2 text-lg font-medium text-white">
        Data Diri Pemesan
      </h3>
      <InputForm
        type="text"
        label="Nama Lengkap"
        placeholder="Masukkan nama lengkap Anda"
        onChange={(e) => onChange('bookerName', e.target.value)}
        {...register("bookerName", {
          required: "Nama Lengkap Wajib diisi"
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
        name="last_name"
        label="Nama Keluarga"
        placeholder="Masukkan nama keluarga Anda"
        validation={{}}
      />
      <InputForm
        label="Nomor Telepon"
        placeholder="Ex: 081234567890"
        onChange={(e) => onChange('bookerPhone', e.target.value)}
        {...register("bookerPhone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Invalid phone number",
          }
        })}
      />

      <InputForm
        label="Email"
        type="email"
        placeholder="Ex: email@example.com"
        {...register("bookerEmail", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          }
        })}
        onChange={(e) => onChange('bookerEmail', e.target.value)}
      />
    </div>
  );
};

export default CustomerForm;
