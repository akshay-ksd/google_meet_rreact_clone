import React, { useContext } from "react";
import { SocketContext } from "../../socket/SocketContext";
function Room() {
  const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} = useContext(SocketContext)
  return (
    <div style={{ width: "100%", height: 200, backgroundColor: "white" }}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default Room;
