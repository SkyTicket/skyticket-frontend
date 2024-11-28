const SearchBar = () => {
  return (
    <div className="relative w-full lg:min-w-[444px] md:max-w-[360px] bg-[#EEEEEE] rounded-2xl">
      <input
        className="rounded-2xl w-full bg-transparent h-12 placeholder:bg-[#EEEEEE] placeholder text-slate-700 text-sm px-6 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Cari di sini ..."
        type="text"
      />
      <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#8A8A8A"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
