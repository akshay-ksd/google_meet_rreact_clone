import React, { useState } from "react";
import { VideocamOutline, KeypadOutline } from "react-ionicons";

function Banner1() {
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };
  return (
    <div className="w-1/2">
      <div className="pl-11">
        <p className="mt-16 font-poppins text-gray-800 text-4xl ml-1">
          Premium Video Meetings.
        </p>
        <p className="mt-2 font-poppins text-gray-800 text-4xl ml-1">
          Now Free For Everyone.
        </p>
      </div>
      <div className="pl-11">
        <p className="mt-7 font-poppins text-gray-500 text-lg ml-1">
          We re-engineered the service we built for secure business
        </p>
        <p className="mt-1 font-poppins text-gray-500 text-lg ml-1">
          meetings, Google Meet, to make it free and available for all
        </p>
      </div>

      <div className="pt-10 flex pl-11">
        <button className="flex p-3 bg-blue-500 items-center justify-evenly rounded-md shadow-md">
          <VideocamOutline
            color={"white"}
            height="22px"
            width="22px"
            onClick={() => alert("Hi!")}
          />
          <span className="font-poppins text-white text-base ml-2 ">
            New Meeting
          </span>
        </button>

        <div
          className={`p-3  ${inputFocus ? "border-2" : "border"} ${
            inputFocus ? "border-blue-500" : "border-gray-500"
          } ml-5 rounded-md flex items-center`}
        >
          <KeypadOutline
            color={"black"}
            height="22px"
            width="22px"
            onClick={() => alert("Hi!")}
          />
          <input
            className="outline-none ml-2 font-poppins text-md text-gray-600 mr-5"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Enter a code or room id"
          />
        </div>

        {inputFocus && (
          <button className="p-3 items-center justify-center rounded-md ml-3">
            <span className="font-poppins text-gray-500 text-base">
              Join
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Banner1;
