function Box({ children, size }) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className={`${
            size === "96" ? "w-96" : size === "1/2" ? "w-1/2" : ""
          } absolute top-[20vh] flex flex-col items-end rounded-xl bg-white`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Box;
