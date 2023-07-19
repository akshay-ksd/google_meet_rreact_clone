// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screen/home/Home';
import Room from './screen/room/Room';

const App = () => {
  return (
    <div style={{padding:10,backgroundColor:"red",height:500}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;
