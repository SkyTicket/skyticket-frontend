import React from "react";
import InputForm from "./InputForm";
import { useFormContext } from "react-hook-form";

const CustomerForm = ({ onChange }) => {
  const { 
    register, 
    formState: { errors },
    trigger 
  } = useFormContext();

  const validateField = async (field) => {
    await trigger(`bookerData.${field}`);
  };

  const handleInputChange = (field, value) => {
    onChange(field, value);
    validateField(field);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Format email tidak valid";
    }
    return true;
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!phoneRegex.test(phone)) {
      return "Format nomor telepon tidak valid";
    }
    return true;
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
      return "Nama hanya boleh berisi huruf";
    }
    if (name.length < 3) {
      return "Nama lengkap minimal 3 karakter";
    }
    return true;
  };

  return (
    <div className="space-y-4">
      <h3 className="mb-4 rounded-t-xl bg-[#3C3C3C] px-4 py-2 text-lg font-medium text-white">
        Data Diri Pemesan
      </h3>
      
      <InputForm
        type="text"
        label="Nama Lengkap"
        placeholder="Masukkan nama lengkap Anda"
        error={errors?.bookerData?.bookerName?.message}
        {...register("bookerData.bookerName", {
          required: "Nama Lengkap wajib diisi",
          validate: validateName,
          onChange: (e) => handleInputChange('bookerName', e.target.value)
        })}
      />

      <InputForm
        label="Nomor Telepon"
        placeholder="Ex: 081234567890"
        error={errors?.bookerData?.bookerPhone?.message}
        {...register("bookerData.bookerPhone", {
          required: "Nomor Telepon wajib diisi",
          validate: validatePhone,
          onChange: (e) => handleInputChange('bookerPhone', e.target.value)
        })}
      />

      <InputForm
        label="Email"
        type="email"
        placeholder="Ex: email@example.com"
        error={errors?.bookerData?.bookerEmail?.message}
        {...register("bookerData.bookerEmail", {
          required: "Email wajib diisi",
          validate: validateEmail,
          onChange: (e) => handleInputChange('bookerEmail', e.target.value)
        })}
      />

      <div className="mt-4 rounded-lg bg-gray-50 p-4">
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Pastikan email aktif dan dapat dihubungi</li>
          <li>• Nomor telepon harus aktif dan terhubung dengan WhatsApp</li>
          <li>• Nama lengkap harus sesuai dengan KTP/Paspor</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerForm;
