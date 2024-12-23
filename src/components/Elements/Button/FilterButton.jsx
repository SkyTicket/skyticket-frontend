const FilterButton = ({ onClick, text }) => {
  return (
    <button
      className="flex items-center rounded-full border-2 border-purple-500 bg-white px-4 py-2 font-semibold text-purple-600 transition hover:bg-purple-100"
      onClick={() => {
        console.log("Filter button clicked");
        onClick();
      }}
    >
      <img
        src="/assets/icons/prefix-wrapper.svg"
        alt="Termurah"
        className="pr-2"
      />
      <span>{text}</span>
    </button>
  );
};

export default FilterButton;