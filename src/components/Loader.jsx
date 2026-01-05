import React from "react";

const Loader = ({ fullScreen = true }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "fixed inset-0" : "w-full h-full"
      } bg-black z-50`}
    >
      <div className="w-14 h-14 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
