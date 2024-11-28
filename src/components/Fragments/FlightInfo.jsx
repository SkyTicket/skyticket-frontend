const FlightInfo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Button back */}
      <button className="px-4 py-2 text-purple-600 bg-[#A06ECE] rounded-lg">
        <img
          src="/src/assets/icons/fi_arrow-left.svg"
          alt="Back"
          className="w-5 h-5 hover:cursor-pointer"
        />
      </button>
      {/* Detail flight */}
      <span className="text-white font-medium">
        JKT → MLB - 2 Penumpang - Economy
      </span>
    </div>
  );
};

export default FlightInfo;
