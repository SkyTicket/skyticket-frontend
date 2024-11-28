import React from "react";
import LoaderText from "../../Elements/Load/LoaderText";
import ProgressBar from "../../Elements/Load/ProgressBar";
const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white space-y-4">
      <LoaderText />
      <ProgressBar />
    </div>
  );
};

export default LoadingAnimation;
