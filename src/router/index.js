import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../screen/home/Home';
import Room from '../screen/room/Room';
function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Room" element={<Room />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router