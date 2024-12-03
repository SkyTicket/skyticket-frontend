const FilterItem = ({ icon, label, hasDropdown = true }) => {
  return (
    <div className=" flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
      <div className=" flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {hasDropdown && (
        <div className="text-black hover:text-black">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default FilterItem;
