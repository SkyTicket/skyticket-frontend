import React from "react";
import "../../../../public/css/loaderAnimation.css";

const ProgressBar = () => {
  return (
    <div className="relative h-16 w-72 bg-gray-200 rounded-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-full w-full bg-purple-700 animate-loader"></div>
      {/* Man pushing */}
      <div className="absolute h-full w-16 flex justify-center items-center animate-push">
        <img
          src="/src/assets/icons/man.svg"
          alt="man pushing"
          className="h-15"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
