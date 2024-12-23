const FilterItem = ({
  icon,
  className,
  label,
  hasDropdown = true,
  isMobile = false,
}) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50 ${
        isMobile ? "justify-center" : ""
      } text-black`}
    >
      {isMobile ? (
        <div className="h-6 w-6">{icon}</div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            {icon}
            <span className="text-black">{label}</span>
          </div>
          {hasDropdown && (
            <div className="text-black hover:text-black">
              <svg
                className="h-4 w-4"
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
        </>
      )}
    </div>
  );
};

export default FilterItem;
