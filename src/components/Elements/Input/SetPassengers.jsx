import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faPerson,
  faChildDress,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";
import BoxSearch from "../Search/BoxSearch";

function SetPassenger({ close, setFields }) {
  const [counters, setCounters] = useState([0, 0, 0]);
  const category = ["Dewasa", "Anak", "Bayi"];
  const descriptions = ["12 tahun keatas", "2 - 11 tahun", "Dibawah 2 tahun"];
  const icons = [faPerson, faChildDress, faChildReaching];

  const increment = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decrement = (index) => {
    const newCounters = [...counters];
    if (newCounters[index] > 0) {
      newCounters[index] -= 1;
    }
    setCounters(newCounters);
  };

  const handleSave = () => {
    setFields(counters);
    close();
  };

  return (
    <BoxSearch save={handleSave} closeHandler={close} isShort={true}>
      <div className="w-full p-4 pb-0 pt-2">
        {counters.map((count, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 py-2"
          >
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={icons[index]}
                className="h-5 w-5 text-[#3C3C3C]"
              />
              <div className="text-left">
                <p className="font-bold text-[#151515]">{category[index]}</p>
                <p className="text-xs text-gray-400">({descriptions[index]})</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => decrement(index)}
                className="cursor-pointer rounded-md border border-[#7126B5] p-2 text-[#7126B5]"
              />
              <input
                type="text"
                value={count}
                readOnly
                className="h-[34px] w-[60px] rounded-md border-2 border-gray-300 bg-white text-center text-[#151515]"
              />
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => increment(index)}
                className="cursor-pointer rounded-md border border-[#7126B5] p-2 text-[#7126B5]"
              />
            </div>
          </div>
        ))}
      </div>
    </BoxSearch>
  );
}
export default SetPassenger;
