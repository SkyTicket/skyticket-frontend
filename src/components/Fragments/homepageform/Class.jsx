import { useState } from "react";
import Backdrop from "../../Elements/Search/Backdrop";
import SetClass from "../../Elements/Input/SetClass";

function Class() {
  const [showSetClass, setShowSetClass] = useState(false);
  const [seat, setSeats] = useState("");

  return (
    <>
      <input
        type="text"
        value={seat == "" ? "" : seat}
        onClick={() => setShowSetClass(true)}
        className="w-36 cursor-pointer border-b border-gray-500 bg-white py-2 font-medium text-black placeholder-gray-300 focus:border-slate-400 focus:outline-none"
        placeholder="Select Class"
        readOnly
      />

      {showSetClass && (
        <>
          <Backdrop />
          <SetClass close={() => setShowSetClass(false)} setSeat={setSeats} />
        </>
      )}
    </>
  );
}

export default Class;
