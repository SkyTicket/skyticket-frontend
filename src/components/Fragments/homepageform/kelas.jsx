import { useState } from "react";
import Backdrop from "../../elements/search/backdrop";
import SetKelas from "../../elements/homepageForm/setKelas";

function Kelas() {
  const [showSetKelas, setShowSetKelas] = useState(false);
  const [seat, setSeats] = useState("");

  return (
    <>
      <input
        type="text"
        value={seat == "" ? "" : seat}
        onClick={() => setShowSetKelas(true)}
        className="font-bold border-b border-gray-500 w-36 pb-2 cursor-pointer focus:outline-none focus:border-slate-400"
        placeholder="Select Class"
        readOnly
      />

      {showSetKelas && (
        <>
          <Backdrop />
          <SetKelas close={() => setShowSetKelas(false)} setSeat={setSeats} />
        </>
      )}
    </>
  );
}

export default Kelas;
