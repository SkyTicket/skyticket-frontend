import { children } from "react";
import { MdNavigateNext } from "react-icons/md";

const Progress = (props) => {
  const { progress2 = "text-[#8A8A8A]", progress3 = "text-[#8A8A8A]" } = props;
  return (
    <div className="shadow-md">
      <div className="mx-auto mt-12 flex max-w-7xl pl-4 text-xl font-bold text-black">
        <span>Isi Data Diri</span>
        <span className="mt-1">
          <MdNavigateNext className="text-[#8A8A8A]" />
        </span>
        <span className={`${progress2}`}>Bayar</span>
        <span className="mt-1">
          <MdNavigateNext className="text-[#8A8A8A]" />
        </span>
        <span className={`${progress3} mb-4`}>Selesai</span>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Progress;
