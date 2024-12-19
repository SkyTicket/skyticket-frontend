import React from "react";
import "../../Styles/styles.css";

const ProgressBar = () => {
  return (
    <div className="relative flex h-16 w-72 overflow-hidden rounded-lg border-2 border-black bg-gray-200">
      {/* Progress Bar */}
      <div className="animate-loader absolute left-0 top-0 z-10 h-full w-full bg-purple-700"></div>
      {/* Man pushing */}
      <div className="animate-push absolute -left-16 z-20 flex h-full items-center">
        <img
          src="/public/assets/icons/man.svg"
          alt="man pushing"
          className="h-14"
        />
      </div>
            
    </div>
  );
};

export default ProgressBar;
