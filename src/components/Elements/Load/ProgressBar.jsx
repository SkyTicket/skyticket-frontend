import React from "react";
import "../../../../public/css/loaderAnimation.css";

const ProgressBar = () => {
  return (
    <div className="relative flex  border-2 border-black h-16 w-72 bg-gray-200 rounded-lg overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-full w-full bg-purple-700 animate-loader z-10"></div>
        
        {/* Man pushing */}
        <div className="absolute z-20 -left-16 h-full flex items-center animate-push">
          <img
            src="/src/assets/icons/man.svg"
            alt="man pushing"
            className="h-14"
          />
        </div>
      </div>
  );
};

export default ProgressBar;