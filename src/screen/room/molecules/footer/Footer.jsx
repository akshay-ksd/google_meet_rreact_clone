import React from "react";
import { VideocamOutline,MicOutline } from "react-ionicons";

const Footer = () => {
  const Button = ({ children }) => {
    return (
      <button className="w-9 h-9 rounded-full bg-gray-500 items-center justify-center flex">
        {children}
      </button>
    );
  };
  return (
    <div className="w-full h-12 bg-black flex items-center justify-evenly">
      <Button>
        <VideocamOutline
          color={"#fff"}
          height="18px"
          width="18px"
          onClick={() => alert("Hi!")}
        />
      </Button>
      <Button>
        <MicOutline
          color={"#fff"}
          height="18px"
          width="18px"
          onClick={() => alert("Hi!")}
        />
      </Button>
      <Button>
        <MicOutline
          color={"#fff"}
          height="18px"
          width="18px"
          onClick={() => alert("Hi!")}
        />
      </Button>
      <Button>
        <MicOutline
          color={"#fff"}
          height="18px"
          width="18px"
          onClick={() => alert("Hi!")}
        />
      </Button>
      <Button>
        <MicOutline
          color={"#fff"}
          height="18px"
          width="18px"
          onClick={() => alert("Hi!")}
        />
      </Button>
    </div>
  );
};

export default Footer;
