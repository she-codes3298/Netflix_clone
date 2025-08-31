import React, {useState, useEffect, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {
  const [apiData, setApiData]= useState([]);
  
  const cardsRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWE0NzBiMDNmNmQxY2NjOThkMjRmMTNkMjE5ZjhkMiIsIm5iZiI6MTc1NjYyODcyNS40MzcsInN1YiI6IjY4YjQwNmY1ZmRmYzBkNjljNDNjY2RjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbkLuQGrNedefs7LSVfa-3vgLG9gnOiu-4qbniw3aWg'
  }
};



  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX;
  };

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
    const cardDiv = cardsRef.current;
    cardDiv.addEventListener('wheel', handleWheel);

    return () => {
      cardDiv.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='titleCards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => {
         return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
})}
      </div>
    </div>
  );
};

export default TitleCards;
