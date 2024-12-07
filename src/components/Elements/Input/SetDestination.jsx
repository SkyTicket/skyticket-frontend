import axios from "axios";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Box from "../Search/Box";

function SetDestination({ close, setCity }) {
  const [openDestination, setOpenDestination] = useState(null);
  const [airport, setAirports] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = debounce((value, setQuery) => {
    setQuery(value);
  }, 300);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await axios.get(
          `http://34.101.158.185/api/v1/airports`,
          {
            params: {
              airport: searchQuery,
            },
          },
        );
        setAirports(response.data.airports);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAirports();
  }, [searchQuery]);

  const toggleDestination = (id) => {
    setOpenDestination(openDestination === id ? null : id);
  };

  const handleSave = (x) => {
    setCity(x);
    close();
  };

  return (
    <Box size={"1/2"}>
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
          <p className="text-base font-medium text-[#151515]">
            Pencarian Terkini
          </p>
          <p className="font-medium text-red-500">Hapus</p>
        </div>
        <div className="max-h-[210px] overflow-scroll">
          {airport.map((air, index) => (
            <div
              key={index}
              className={`flex w-full cursor-pointer items-center justify-between border-b-2 pt-2 text-[#151515]`}
              onClick={() => handleSave(air)}
            >
              <div className={`flex flex-col`}>
                <div className={`py-1 text-left text-[#151515]`}>
                  {air.airport}
                </div>
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                className="size-6 text-[#8A8A8A]"
              />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
export default SetDestination;
