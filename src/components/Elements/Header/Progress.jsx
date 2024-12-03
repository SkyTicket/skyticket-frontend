import { MdNavigateNext } from "react-icons/md";

const Progress = (props) => {
    const { progress2 = "text-[#8A8A8A]", progress3 = "text-[#8A8A8A]" } = props;
    return (
        <div className="shadow-md">
            <div className="max-w-7xl pl-4 mx-auto mt-12 font-bold text-xl flex">
                <span>Isi Data Diri</span>
                <span className="mt-1">
                    <MdNavigateNext />
                </span>
                <span className={`${progress2}`}>Bayar</span>
                <span className="mt-1">
                    <MdNavigateNext />
                </span>
                <span className={`${progress3} mb-4`}>Selesai</span>
            </div>
        </div>
    );
};

export default Progress;
