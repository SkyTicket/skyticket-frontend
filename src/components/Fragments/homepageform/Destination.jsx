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
        className="bg-white border-b border-gray-500 w-80 pb-2 cursor-pointer focus:outline-none focus:border-slate-400 placeholder-gray-300"
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
