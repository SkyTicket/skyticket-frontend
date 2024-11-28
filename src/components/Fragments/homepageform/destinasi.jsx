import { useState } from "react";
import Backdrop from "../../elements/search/backdrop";
import SetDestination from "../../elements/homepageForm/setDestination";

function Destinasi() {
  const [showSetDestination, setShowSetDestination] = useState(false);
  const [destination, setDestination] = useState("");

  return (
    <>
      <input
        type="text"
        value={destination == "" ? "" : destination}
        onClick={() => setShowSetDestination(true)}
        className="font-bold border-b border-gray-500 w-80 pb-2 cursor-pointer focus:outline-none focus:border-slate-400"
        placeholder="Select City"
        readOnly
      />

      {showSetDestination && (
        <>
          <Backdrop />
          <SetDestination
            close={() => setShowSetDestination(false)}
            setCity={setDestination}
          />
        </>
      )}
    </>
  );
}

export default Destinasi;
