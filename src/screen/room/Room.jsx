import React, { useContext } from "react";
import { SocketContext } from "../../socket/SocketContext";
import Header from "./molecules/header/Header";
import Footer from "./molecules/footer/Footer";
import OwnVideo from "./molecules/ownVideo/OwnVideo";
import { useLocation } from 'react-router-dom';
function Room(props) {
  const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} = useContext(SocketContext)
  
  const location = useLocation();
  const parameter = location.state?.parameter;

  console.log("parameter",parameter)
  return (
    <div className="w-full h-full flex">
       <div className="w-3/4 bg-black h-5/6">
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
