import { useState } from "react";
import Backdrop from "../../Elements/Search/Backdrop";
import SetClass from "../../Elements/Input/SetClass";

function Class({ change }) {
  const [showSetClass, setShowSetClass] = useState(false);
  const [seat, setSeats] = useState("");

  const handleSetSeats = (newSeat) => {
    setSeats(newSeat);
    change(newSeat);
  };

  return (
    <>
      <input
        type="text"
        value={seat}
        onClick={() => setShowSetClass(true)}
        className="w-28 cursor-pointer border-b border-gray-500 bg-white py-2 font-medium text-black placeholder-gray-300 focus:border-slate-400 focus:outline-none md:w-[150px]"
        placeholder="Select Class"
        readOnly
      />

      {showSetClass && (
        <>
          <Backdrop />
          <SetClass
            close={() => setShowSetClass(false)}
            setSeat={handleSetSeats}
          />
        </>
      )}
    </>
  );
}

export default Class;
