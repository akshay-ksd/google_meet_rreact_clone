import React, { createContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io("http://localhost:5000");

const ContextProvider =({children})=>{
    const [stream,setStream] = useState(null);
    const [me,setMe] = useState(null);
    const [call,setCall] = useState({});
    const [callAccepted,setCallAccepted] = useState(false);
    const [callEnded,setCallEnded] = useState(false);
    const [name,setName] = useState("");
    const [roomId,setRoomId] = useState(null);

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();
     
    useEffect(()=>{
        socket.on("me",(id)=>{setMe(id)});

        socket.on("callUser",({from,name:callerName,signal})=>{
            setCall({isReceivedCall:true,from,name:callerName,signal})
        })

        socket.on("newUser",id=>{
            console.log("id",id)
        })
    },[])

    const loadOwnVideo =()=> {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then((currentStream) => {
          setStream(currentStream);
          if (myVideo.current) {
            myVideo.current.srcObject = currentStream;
          }
          console.log("myVideo.current", currentStream);
        })
        .catch((error) => {
          console.error('Error accessing media devices:', error);
        });
    }
    function generateRandom4DigitNumber() {
        const min = 1000; // Minimum 4-digit number (1000)
        const max = 9999; // Maximum 4-digit number (9999)
      
        // Generate a random number between min and max (inclusive)
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
        return randomNumber;
    }

    const answerCall =()=> {
        setCallAccepted(true);

        const peer = new Peer({initiator: false, trickle: false, stream});
        peer.on("signal",(data) => {
            socket.emit("answerCall",{signal: data,to: call.from})
        });

        peer.on("stream",(currentStream) => {
            // userVideo.current.srcObject = currentStream;
        })

        peer.signal(call.signal);

        connectionRef.current = peer;
    }
 
    const callUser =(id)=> {
        const peer = new Peer({initiator: true, trickle: false, stream});

        peer.on("signal",(data) => {
            socket.emit("callUser",{userToCall: id, signalData: data, from: me, name})
        });

        peer.on("stream",(currentStream) => {
            // userVideo.current.srcObject = currentStream;
        })

        socket.on("callAccepted",(signal) => {
            setCallAccepted(true);
            peer.signal(signal)
        })

        connectionRef.current = peer;
    }

    const leaveCall =()=> {
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();
    }

    const createRoom =()=>{
        const rId = generateRandom4DigitNumber()
        socket.emit("createRoom", rId, (acknowledgment) => {
            setRoomId(rId)
        });

       
    }

    const joinRoom =(id)=> {
        socket.emit("joinRoom",id)
    }

    return (
        <SocketContext.Provider value={{
            call,
            callAccepted,
            myVideo,
            userVideo,
            stream,
            name,
            setName,
            callEnded,
            me,
            callUser,
            leaveCall,
            answerCall,
            createRoom,
            roomId,
            loadOwnVideo,
            joinRoom
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export {ContextProvider,SocketContext}