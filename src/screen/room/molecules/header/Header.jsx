import React, { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState("M");

  const changeMode = (m) => {
    setMode(m);
  };
  return (
    <div className="w-full h-12 bg-black flex items-center">
      <div className="px-5">
        <p className="font-poppins text-xs text-gray-300">
          End-To-End Confrense
        </p>
        <p className="font-poppins text-md  text-gray-50">Video Call Started</p>
      </div>
      <div className="h-full flex items-center justify-around w-64 ml-96">
        <button
          className={`w-20 h-8 ${
            mode == "d"
              ? "bg-gray-400 rounded-sm border border-1 border-white shadow-md"
              : "bg-black"
          } `}
          onClick={()=>changeMode("d")}
        >
          <p className={`font-poppins text-white text-sm`}>Contact</p>
        </button>
        <button
          className={`w-20 h-8 ${
            mode == "M"
              ? "bg-gray-400 rounded-sm border border-1 border-white shadow-md"
              : "bg-black"
          } `}
          onClick={()=>changeMode("M")}
        >
          <p className={`font-poppins text-white text-sm`}>Meeting</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
