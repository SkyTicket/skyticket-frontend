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
        className="bg-white border-b border-gray-500 w-36 pb-2 cursor-pointer focus:outline-none focus:border-slate-400 placeholder-gray-300"
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
