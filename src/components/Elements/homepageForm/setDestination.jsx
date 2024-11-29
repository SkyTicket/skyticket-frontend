import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Box from "../search/box";

function SetDestination({ close, setCity }) {
  const [openDestination, setOpenDestination] = useState(null);
  const cities = ["Jakarta", "Bandung", "Surabaya"];

  const toggleDestination = (id) => {
    setOpenDestination(openDestination === id ? null : id);
  };

  const handleSave = (x) => {
    setCity(x);
    close();
  };

  return (
    <Box size={"1/2"}>
      <div className="w-full p-4 pb-0 justify-between flex items-center">
        <div className="border border-gray-400 rounded-md w-full mr-4 flex items-center px-2 py-1 gap-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Masukkan Kota atau Negara"
            className="w-full"
          />
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={close}
          className="h-7 w-7 cursor-pointer"
        />
      </div>
      <div className="w-full p-4 pt-0">
        <div className="flex justify-between py-2">
          <p className="font-semibold">Pencarian Terkini</p>
          <p className="text-red-500">Hapus</p>
        </div>
        {cities.map((city, index) => (
          <div
            key={index}
            className={`flex w-full justify-between border-b-2 py-1 items-center cursor-pointer`}
            onClick={() => handleSave(city)}
          >
            <div className={`flex flex-col `}>
              <div className={`text-left font-bold pt-2 `}>{city}</div>
            </div>
            <FontAwesomeIcon icon={faXmark} className="text-gray-400 w-5 h-5" />
          </div>
        ))}
      </div>
    </Box>
  );
}
export default SetDestination;
