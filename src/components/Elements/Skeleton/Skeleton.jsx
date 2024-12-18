function SkeletonCard() {
  return (
    <div className="relative mb-8 cursor-pointer rounded-[4px] bg-white p-3 shadow-md">
      <div className="relative h-28 w-full animate-pulse rounded-[4px] bg-gray-300"></div>
      <div className="py-2">
        <div className="mb-2 h-4 w-3/4 animate-pulse rounded bg-gray-300"></div>
        <div className="mb-2 h-3 w-1/2 animate-pulse rounded bg-gray-300"></div>
        <div className="mb-2 h-3 w-2/3 animate-pulse rounded bg-gray-300"></div>
        <div className="h-4 w-5/6 animate-pulse rounded bg-gray-300"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
