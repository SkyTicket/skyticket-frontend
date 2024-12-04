import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Box from "./Box";

function BoxSearch({ children, save, closeHandler }) {
  return (
    <>
      <Box size={"96"}>
        <div className="flex w-full justify-end border-b-2 px-4 py-[14px]">
          <FontAwesomeIcon
            icon={faXmark}
            className="h-6 w-6 cursor-pointer text-[#151515]"
            onClick={closeHandler}
          />
        </div>
        {children}
        <div className="p-2">
          <button
            onClick={save}
            className="m-1 rounded-xl bg-[#4B1979] px-7 py-2 text-white"
          >
            Simpan
          </button>
        </div>
      </Box>
    </>
  );
}

export default BoxSearch;
