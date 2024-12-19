function NoDataFound({ svg, alt, text }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={`/public/assets/icons/${svg}.svg`}
        alt={alt}
        className="h-64 w-64"
      />
      <p className="mt-4 text-lg text-black">Maaf, {text}</p>
      <p className="mt-1 text-lg text-[#7126B5]">
        Coba cari perjalanan lainnya!
      </p>
    </div>
  );
}
export default NoDataFound;
