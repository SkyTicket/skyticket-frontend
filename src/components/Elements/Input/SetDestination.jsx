import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Box from "../Search/Box";

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
      <div className="w-full pt-6 pb-3 px-[22px] justify-between flex items-center">
        <div className="border border-gray-400 rounded-[4px] w-full mr-[10px] flex items-center px-4 py-2 gap-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#D0D0D0] size-5" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Masukkan Kota atau Negara"
            className="w-full bg-white text-black text-sm focus:outline-none"
          />
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={close}
          className="text-[#151515] size-6 cursor-pointer "
        />
      </div>
      <div className="w-full pb-[22px] px-[26px]">
        <div className="flex justify-between py-3">
          <p className="font-medium text-base text-[#151515]">Pencarian Terkini</p>
          <p className="font-medium text-red-500">Hapus</p>
        </div>
        {cities.map((city, index) => (
          <div
            key={index}
            className={`flex w-full justify-between text-[#151515] border-b-2 pt-3 items-center cursor-pointer`}
            onClick={() => handleSave(city)}
          >
            <div className={`flex flex-col`}>
              <div className={`text-left text-[#151515] pt-2`}>{city}</div>
            </div>
            <FontAwesomeIcon icon={faXmark} className="text-[#8A8A8A] size-6" />
          </div>
        ))}
      </div>
    </Box>
  );
}
export default SetDestination;
