import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './molecules/header/Header';
import Banner1 from './organizer/Banner1';
function Home() {
    let navigate = useNavigate();
  return (
    <div style={{height:100,width:"100%",background:"white"}}>
      <Header/>
      <Banner1/>
    </div>
  )
}

export default Home