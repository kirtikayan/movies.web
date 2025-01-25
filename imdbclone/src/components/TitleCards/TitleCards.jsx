import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';




const TitleCards = ({title, cartegory}) => {

const [apiData, setApiData] = useState([]);
const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzI4ODU5ODBmZjk2MDJhMWMzNzFmZjQwNGY0ZDJkYyIsIm5iZiI6MTczNjUxOTQ0OC40OTYsInN1YiI6IjY3ODEyZjE4MDY5MGFjMDZlNzdhZmM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pH4bGYvIpqAMekTSh5TqNIBP_37SmqsxTk4Ah5IqhXk'
  }
};




const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${cartegory?cartegory:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  
  cardsRef.current.addEventListener('wheel',handleWheel );
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>  
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to ={`/player/${card.id}`}className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
      
    </div>
  )
}

export default TitleCards
