import React, { useContext, useEffect, useRef, useState } from 'react'
import { SocketContext } from '../../../../socket/SocketContext';
import { useNavigate } from 'react-router-dom';
const PopUp = (props) => {

    const { setName, createRoom, roomId } = useContext(SocketContext);
    const navigation = useNavigate();

    const [start, setStart] = useState(false);
    const name = useRef("")

    useEffect(() => {
        if (roomId && start) {
            setTimeout(() => {
                props.closeMeeting()
                navigation('/room', { state: { parameter: 'call' } });
            }, 1000);
        }
    }, [roomId])

    const createRooms = () => {
        if (name.current.length !== 0) {
            setName(name.current)
            setStart(true);
            createRoom()
        } else {
            alert("Please enter your name")
        }
    }

    const handleChange = (event) => {
        name.current = event.target.value;
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            {
                start && (
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Room Creating</h2>
                        <p>Room Creating Please wait .....</p>
                        <div className='w-100 flex items-center justify-evenly mt-4'>
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                            </div>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded ml-52"
                                onClick={() => props.closeMeeting()}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )
            }
            {
                !start && (
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Enter name</h2>
                        <input
                            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Your Name"
                            onChange={handleChange} // Call handleChange when the input value changes
                        />
                        <div className='w-100  items-center justify-center mt-4'>
                            {/* <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                            </div> */}
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded ml-52"
                                onClick={createRooms}
                            >
                                Create Room
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PopUp