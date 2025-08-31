import React, { useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom'

const Player = () => {
  const {id}= useParams();

const navigate=useNavigate();
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWE0NzBiMDNmNmQxY2NjOThkMjRmMTNkMjE5ZjhkMiIsIm5iZiI6MTc1NjYyODcyNS40MzcsInN1YiI6IjY4YjQwNmY1ZmRmYzBkNjljNDNjY2RjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbkLuQGrNedefs7LSVfa-3vgLG9gnOiu-4qbniw3aWg'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className='player'>
       <img src={back_arrow_icon} alt=""onClick={()=>{navigate(-2)}}/>
       <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailor' frameBorder='0' allowFullScreen></iframe>
       <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
