import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Box from "../../Elements/Search/Box";

function FilterOrder({ close, setCity }) {
  const [filters, setFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // diubah dengan fetch data jika sudah ada API
  useEffect(() => {
    setFilters(["weue9211", "ahdb8493", "iasn7382"]);
  }, []);

  const handleSearch = debounce((value, setQuery) => {
    setQuery(value);
    console.log(searchQuery);
  }, 300);

  const handleSave = (x) => {
    setCity(x);
    close();
  };

  const handleDelete = (id) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter, index) => index !== id),
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
            placeholder="Masukkan Nomer Penerbangan"
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
            onClick={() => setFilters([])}
          >
            Hapus
          </p>
        </div>
        <div className="max-h-[210px] overflow-y-scroll">
          {filters?.map((filter, index) => (
            <div
              key={index}
              className={`flex w-full items-center justify-between border-b-2 pt-2 text-[#151515]`}
            >
              <div
                className={`flex w-full cursor-pointer flex-col`}
                onClick={() => handleSave(air)}
              >
                <div className={`py-1 text-left text-[#151515]`}>{filter}</div>
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

export default FilterOrder;
