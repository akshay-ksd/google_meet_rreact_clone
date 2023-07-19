import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
  return (
    <div style={{height:100,width:"100%",background:"white"}}>
      <button onClick={()=>navigate('Room')}>press</button>
    </div>
  )
}

export default Home