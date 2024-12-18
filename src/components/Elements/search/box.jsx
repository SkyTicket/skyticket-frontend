function Box({ children, size, isShort }) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center">
        <div
          className={`${
            size === "96" ? "md:w-96" : size === "1/2" ? "md:w-1/2" : ""
          } ${isShort ? "h-[50vh] justify-between" : "h-[60vh]"} absolute bottom-0 flex w-screen flex-col items-end rounded-t-xl bg-white md:bottom-auto md:top-[20vh] md:h-auto md:rounded-xl`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Box;
