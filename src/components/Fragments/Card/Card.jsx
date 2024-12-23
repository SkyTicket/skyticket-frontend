const Card = ({ destination, airline, date, price, image, label, onClick }) => {
  return (
    <div
      className="relative mb-8 cursor-pointer rounded-[4px] bg-white p-3 shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={destination}
          className="h-28 w-full rounded-[4px] object-cover"
        />
        {label && (
          <span className="absolute right-0 top-0 rounded-s-xl bg-[#A06ECE] py-1 pl-[22px] pr-[10px] text-xs font-medium text-white">
            {label}
          </span>
        )}
      </div>
      <div className="py-2">
        <h3 className="text-start text-sm font-medium text-[#151515]">
          {destination}
        </h3>
        <p className="text-start text-xs font-bold text-[#7126B5]">{airline}</p>
        <p className="text-start text-xs font-medium text-[#151515]">{date}</p>
        <p className="text-start text-sm text-[#151515]">
          Mulai dari {""}
          <span className="text-sm font-bold text-[#FF0000]">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
