const FilterButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center font-semibold border-2 bg-white border-purple-500 text-purple-600 rounded-full px-4 py-2 hover:bg-purple-100 transition"
      onClick={onClick}
    >
      <img
        src="/src/assets/icons/Prefix wrapper.svg"
        alt="Termurah"
        className="pr-2"
      />
      <span>Termurah</span>
    </button>
  );
};

export default FilterButton;
