const SearchBar = () => {
  return (
    <div className="relative min-w-80 rounded-2xl bg-[#EEEEEE] sm:w-[600px] md:max-w-[444px] lg:min-w-[444px]">
      <input
        className="h-12 w-full rounded-2xl bg-transparent px-6 py-3 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:bg-[#EEEEEE] hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
        placeholder="Cari di sini ..."
        type="text"
      />
      <span className="absolute right-6 top-1/2 -translate-y-1/2 transform text-gray-500">
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
