import React, { useContext, useEffect, useRef, useState } from 'react'
import { SocketContext } from "../../../../socket/SocketContext";

const OwnVideo = () => {
  // const myVideo = useRef(null);
  // const [stream, setStream] = useState(null);
  const {stream,myVideo,loadOwnVideo} = useContext(SocketContext)

  useEffect(() => {
    // navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    //   .then((currentStream) => {
    //     setStream(currentStream);
    //     if (myVideo.current) {
    //       myVideo.current.srcObject = currentStream;
    //     }
    //     console.log("myVideo.current", currentStream);
    //   })
    //   .catch((error) => {
    //     console.error('Error accessing media devices:', error);
    //   });
    loadOwnVideo()
  }, []);
  return (
    <div className='h-96 bg-black items-center justify-evenly flex'>
      {
        stream && (
          <video ref={myVideo} autoPlay width="400" height="300" style={{ borderRadius: '10px' }} muted/>
        )
      } 
       {
        stream && (
          <video ref={myVideo} autoPlay width="400" height="300" style={{ borderRadius: '10px' }} muted/>
        )
      } 
    </div>
  )
}

export default OwnVideo