import React from "react";
import LoaderText from "../../Elements/Loading/LoaderText";
import ProgressBar from "../../Elements/Loading/ProgressBar";
const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-white">
      <LoaderText />
      <ProgressBar />
    </div>
  );
};

export default LoadingAnimation;
