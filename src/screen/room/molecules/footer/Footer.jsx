import React from "react";
import { VideocamOutline,MicOutline,DownloadOutline,HandRightOutline,CallOutline } from "react-ionicons";

const Footer = () => {
  const Button = ({ children,color }) => {
    if(color == "red"){
      return (
        <button className={`w-14 h-12 rounded-full bg-red-500 items-center justify-center flex`}>
          {children}
        </button>
      );
    }else{
      return (
        <button className={`w-9 h-9 rounded-full bg-gray-500 items-center justify-center flex`}>
          {children}
        </button>
      );
    }
  };
  return (
    <div className="w-3/4 h-24 bg-black flex items-center justify-evenly px-20 absolute bottom-0">
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
        <DownloadOutline
          color={"#fff"}
          height="18px"
          width="18px"
          onClick={() => alert("Hi!")}
        />
      </Button>
      <Button>
        <HandRightOutline
          color={"#fff"}
          height="18px"
          width="18px"
          onClick={() => alert("Hi!")}
        />
      </Button>
      <Button color={"red"}>
        <CallOutline
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
