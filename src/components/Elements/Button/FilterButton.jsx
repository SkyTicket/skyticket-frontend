const FilterButton = ({ onClick }) => {
  return (
    <button className="bg-transparent p-0" onClick={onClick}>
      <img
        src="/src/assets/icons/Chip.svg"
        alt="Filter Icon"
        className="w-36 h-"
      />
    </button>
  );
};

export default FilterButton;
