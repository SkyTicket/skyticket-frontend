const FlightInfo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Button back */}
      <button className="rounded-lg bg-[#A06ECE] px-4 py-2 text-purple-600">
        <img
          src="/src/assets/icons/arrow-left.svg"
          alt="Back"
          className="h-5 w-5 hover:cursor-pointer"
        />
      </button>
      {/* Detail flight */}
      <span className="font-medium text-white">
        JKT → MLB - 2 Penumpang - Economy
      </span>
    </div>
  );
};

export default FlightInfo;
