import { useState } from "react";
import Backdrop from "../../Elements/Search/Backdrop";
import SetDestination from "../../Elements/Input/SetDestination";

function Destination({ value, onChange }) {
  const [showSetDestination, setShowSetDestination] = useState(false);

  const handleSetDestination = (city) => {
    onChange(city);
    setShowSetDestination(false);
  };

  return (
    <>
      <input
        type="text"
        value={value || ""}
        onClick={() => setShowSetDestination(true)}
        className="w-80 cursor-pointer border-b border-gray-500 bg-white py-2 text-lg font-medium text-black placeholder-gray-300 focus:border-slate-400 focus:outline-none"
        placeholder="Select City"
        readOnly
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
