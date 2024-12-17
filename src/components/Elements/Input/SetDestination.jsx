import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Box from "../Search/Box";
import { fetchAirports } from "../../../services/airportsService";

function SetDestination({ close, setCity }) {
  const [airport, setAirports] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = debounce((value, setQuery) => {
    setQuery(value);
  }, 300);

  useEffect(() => {
    const fetchAndSetAirports = async () => {
      try {
        const response = await fetchAirports(searchQuery);
        setAirports(response);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAndSetAirports();
  }, [searchQuery]);

  const handleSave = (x) => {
    setCity(x);
    close();
  };

  const handleDelete = (id) => {
    setAirports((prevAirports) =>
      prevAirports.filter((air, index) => index !== id),
    );
  };

  return (
    <Box size={"1/2"} isShort={false}>
      <div className="flex w-full items-center justify-between px-[22px] pb-3 pt-6">
        <div className="mr-[10px] flex w-full items-center gap-2 rounded-[4px] border border-gray-400 px-4 py-2">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="size-5 text-[#D0D0D0]"
          />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Masukkan Kota atau Negara"
            className="w-full bg-white text-sm text-black focus:outline-none"
            onChange={(e) => handleSearch(e.target.value, setSearchQuery)}
          />
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={close}
          className="size-6 cursor-pointer text-[#151515]"
        />
      </div>
      <div className="w-full px-[26px] pb-[22px]">
        <div className="flex justify-between pb-1 pt-2">
          <p className="cursor-default select-none text-base font-medium text-[#151515]">
            Pencarian Terkini
          </p>
          <p
            className="cursor-pointer select-none font-medium text-red-500"
            onClick={() => setAirports([])}
          >
            Hapus
          </p>
        </div>
        <div className="max-h-[210px] overflow-y-scroll">
          {airport?.map((air, index) => (
            <div
              key={index}
              className={`flex w-full items-center justify-between border-b-2 pt-2 text-[#151515]`}
            >
              <div
                className={`flex w-full cursor-pointer flex-col`}
                onClick={() => handleSave(air)}
              >
                <div className={`py-1 text-left text-[#151515]`}>
                  {air.airport}
                </div>
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => handleDelete(index)}
                className="size-6 cursor-pointer text-[#8A8A8A]"
              />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default SetDestination;
