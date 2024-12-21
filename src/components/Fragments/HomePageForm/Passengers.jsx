import { useState, useEffect } from "react";
import SetPassenger from "../../Elements/Input/SetPassengers";
import Backdrop from "../../Elements/Search/Backdrop";

function Passengers({ change, prefillPassengers }) {
  const [showSetPassenger, setShowSetPassenger] = useState(false);
  const [fields, setFields] = useState([0, 0, 0]);
  const totalPassengers = fields[0] + fields[1] + fields[2];

  useEffect(() => {
    if (prefillPassengers && prefillPassengers.length === 3) {
      change(prefillPassengers);
      setFields(prefillPassengers);
    }
  }, [prefillPassengers, change]);

  const handleSetFields = (newFields) => {
    setFields(newFields);
    change(newFields);
  };

  return (
    <>
      <input
        type="text"
        value={totalPassengers == 0 ? "" : totalPassengers + " Penumpang"}
        onClick={() => setShowSetPassenger(true)}
        className="w-[30vw] cursor-pointer border-b-2 border-[#D0D0D0] bg-white py-2 font-medium text-black placeholder-gray-300 focus:outline-none lg:w-[150px]"
        placeholder="Pilih Penumpang"
        readOnly
      />

      {showSetPassenger && (
        <>
          <Backdrop />
          <SetPassenger
            close={() => setShowSetPassenger(false)}
            setFields={handleSetFields}
          />
        </>
      )}
    </>
  );
}

export default Passengers;
