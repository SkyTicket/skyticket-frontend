import { useState } from "react";
import SetPassenger from "../../Elements/Input/SetPassengers";
import Backdrop from "../../Elements/Search/Backdrop";

function Passengers() {
  const [showSetPassenger, setShowSetPassenger] = useState(false);
  const [fields, setFields] = useState([0, 0, 0]);
  const totalPassengers = fields[0] + fields[1] + fields[2];

  return (
    <>
      <input
        type="text"
        value={totalPassengers == 0 ? "" : totalPassengers + " Penumpang"}
        onClick={() => setShowSetPassenger(true)}
        className="bg-white border-b border-gray-500 w-36 pb-2 cursor-pointer focus:outline-none focus:border-slate-400 placeholder-gray-300"
        placeholder="Select Passengers"
        readOnly
      />

      {showSetPassenger && (
        <>
          <Backdrop />
          <SetPassenger
            close={() => setShowSetPassenger(false)}
            setFields={setFields}
          />
        </>
      )}
    </>
  );
}

export default Passengers;
