const FilterButton = ({ onClick , text}) => {
  return (
    <div className="">
    <button
      className="flex items-center rounded-full border-2 border-purple-500 bg-white px-4 py-2 font-semibold text-purple-600 transition hover:bg-purple-100"
      onClick={onClick}
    >
      <img
        src="/public/assets/icons/prefix-wrapper.svg"
        alt="Termurah"
        className="pr-2"
      />
      <span>{text}</span>
    </button>
    </div>
  );
};

export default FilterButton;
