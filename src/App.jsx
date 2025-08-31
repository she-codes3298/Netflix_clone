import React, { useEffect } from 'react';
import "./index.css";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import {Routes,Route, useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        console.log("logged in");
        navigate('/');
      }
      else{
        console.log("logged out");
        navigate('/login');

      }
    })
  },[])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      
    </div>
  )
}

export default App
