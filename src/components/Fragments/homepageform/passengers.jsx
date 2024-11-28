import { useState } from "react";
import SetPassenger from "../../elements/homepageForm/setPassengers";
import Backdrop from "../../elements/search/backdrop";

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
        className="font-bold border-b border-gray-500 w-36 pb-2 cursor-pointer focus:outline-none focus:border-slate-400"
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
