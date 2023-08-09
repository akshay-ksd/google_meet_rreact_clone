import React, { useContext, useEffect, useRef, useState } from 'react'
import { SocketContext } from "../../../../socket/SocketContext";

const OwnVideo = () => {
  // const myVideo = useRef(null);
  // const [stream, setStream] = useState(null);
  const {stream,myVideo,loadOwnVideo,userVideo} = useContext(SocketContext)

  useEffect(() => {
    loadOwnVideo()
  }, []);
  return (
    <div className='bg-black items-center justify-evenly flex h-screen'>
      {
        stream && (
          <video ref={myVideo} autoPlay width="400" height="300" style={{ borderRadius: '10px' }} muted/>
        )
      } 
       {
        stream && (
          <video ref={userVideo} autoPlay width="400" height="300" style={{ borderRadius: '10px' }} muted/>
        )
      } 
    </div>
  )
}

export default OwnVideo