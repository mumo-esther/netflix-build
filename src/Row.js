import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';

function Row({title, fetchUrl, isLargeRow=false}) {
    const [movies, setMovies] = useState([]);
    
    const base_url = 'https://image.tmdb.org/t/p/original/'
    useEffect(() =>{
        async function fetchData() {
            const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWZjZmYyOGY1ZjRiYWNkOTJlODRhMDFiODRkOGQzMiIsInN1YiI6IjY0ZmFlNWZmZTBjYTdmMDE0ZjZlMzYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGT9BUxlQAJvz3r_LKKw7DEWKiFracxKj8vp_mYxsG0'; // Replace 'YOUR_ACCESS_TOKEN' with your actual access token
      
            const request = await axios.get(fetchUrl, {
              headers: {
                'Authorization': `Bearer ${accessToken}`, // Include the access token in the Authorization header
              },
            });
      
            setMovies( request.data.results);
          }
          fetchData();
    }, [fetchUrl]);
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
        {movies.map(
        (movie) => 
            ((isLargeRow && movie.poster_path) ||
             (!isLargeRow && movie.backdrop_path)) && ( <img
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt='Movie Name' />)          
        )}
        </div>
    </div>
  )
}

export default Row