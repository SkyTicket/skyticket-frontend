const DynamicBanner = ({ children, backgroundImage }) => {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center bg-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute">{children}</div>
    </div>
  );
};

export default DynamicBanner;
