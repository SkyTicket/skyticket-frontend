import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faPerson,
  faChildDress,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";

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
    <BoxSearch save={handleSave} closeHandler={close}>
      <div className="w-full p-4 pb-0 pt-2">
        {counters.map((count, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 py-1"
          >
            <div className="flex gap-2">
              <FontAwesomeIcon icon={icons[index]} className="w-5 h-5" />
              <div className="text-left">
                <p className="font-bold">{category[index]}</p>
                <p className="text-gray-400">({descriptions[index]})</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => decrement(index)}
                className="p-2 rounded-md border border-purple-500 cursor-pointer"
              />
              <input
                type="text"
                value={count}
                readOnly
                className="w-8 h-8 text-center border-2 border-gray-300 rounded-md"
              />
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => increment(index)}
                className="p-2 rounded-md border border-purple-500 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </BoxSearch>
  );
}
export default SetPassenger;
