const Card = ({ destination, airline, date, price, image, label }) => {
  return (
    <div className="bg-white rounded-[4px] shadow-md p-3 mb-8 relative hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={destination}
          className="w-full rounded-[4px] h-28 object-cover"
        />
        {label && (
          <span className="absolute top-0 right-0 bg-[#A06ECE] text-white text-xs font-medium py-1 pr-[10px] pl-[22px] rounded-s-xl">
            {label}
          </span>
        )}
      </div>
      <div className="py-2">
        <h3 className="text-start text-sm font-medium text-[#151515]">{destination}</h3>
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
