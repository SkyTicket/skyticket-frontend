const LoginButton = () => {
  return (
    <button
      className="flex min-w-[98px] max-w-[105px] items-center gap-2 h-12 rounded-xl bg-[#7126B5] py-2 px-4 text-center text-sm font-normal text-white shadow-lg border-none transition-colors hover:bg-purple-600 active:bg-[#7126B5] active:ring-4 active:ring-purple-500"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        className="size-5"
      >
        <path
          d="M8.33301 14.1663L12.4997 9.99967L8.33301 5.83301"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 10H2.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Login
    </button>
  );
};

export default LoginButton;
