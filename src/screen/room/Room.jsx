import React, { useContext } from "react";
import { SocketContext } from "../../socket/SocketContext";
import Header from "./molecules/header/Header";
import Footer from "./molecules/footer/Footer";
import OwnVideo from "./molecules/ownVideo/OwnVideo";
function Room() {
  const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} = useContext(SocketContext)
  return (
    <div className="w-full h-full flex">
       <div className="w-3/4 bg-black">
          <Header/>
          <OwnVideo/>
          <Footer/>
       </div>
       <div className="w-1/4 bg-red-400">
       <p>x</p>
       </div>
    </div>
  );
}

export default Room;
