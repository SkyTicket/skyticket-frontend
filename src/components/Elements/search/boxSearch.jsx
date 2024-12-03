import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Box from "./Box";

function BoxSearch({ children, save, closeHandler }) {
  return (
    <>
      <Box size={"96"}>
        <div className="border-b-2 w-full flex justify-end p-1">
          <FontAwesomeIcon
            icon={faXmark}
            className="w-6 h-6 cursor-pointer"
            onClick={closeHandler}
          />
        </div>
        {children}
        <div className="p-2">
          <button
            onClick={save}
            className="bg-purple-900 text-white px-7 py-2 m-1 rounded-lg"
          >
            Simpan
          </button>
        </div>
      </Box>
    </>
  );
}

export default BoxSearch;
