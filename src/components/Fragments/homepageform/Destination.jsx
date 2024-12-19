import { useState } from "react";
import Backdrop from "../../Elements/Search/Backdrop";
import SetDestination from "../../Elements/Input/SetDestination";

function Destination({ value, onChange, depOrArr }) {
  const [showSetDestination, setShowSetDestination] = useState(false);

  const handleSetDestination = (city) => {
    onChange(city);
    setShowSetDestination(false);
  };

  return (
    <>
      <input
        type="text"
        value={value.airport || ""}
        onClick={() => setShowSetDestination(true)}
        className="w-[60vw] cursor-pointer  border-[#D0D0D0] bg-white py-4 text-lg font-medium text-black placeholder-gray-300 focus:outline-none lg:w-80 lg:border-b-2 lg:py-2"
        placeholder="Pilih Kota"
        readOnly
      />
      <input
        type="hidden"
        name={`${depOrArr == "dep" ? "depCity" : "arrCity"}`}
        value={value.input_value || ""}
      />

      {showSetDestination && (
        <>
          <Backdrop />
          <SetDestination
            close={() => setShowSetDestination(false)}
            setCity={handleSetDestination}
          />
        </>
      )}
    </>
  );
}

export default Destination;
