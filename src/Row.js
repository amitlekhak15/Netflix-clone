import React,{useEffect, useState} from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const base_url="https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl,isLargeRow }) => {
    const[movies,setMovies]=useState([])
    const[trailerUrl,settrailerUrl]=useState("");
    //snippet of code which run on specific condition
    useEffect(() => {
        async function fetchData(){
     
            const request=await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
       }
      fetchData();
    }, [fetchUrl])
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };
   console.log(movies);
   const handleClick=(movie)=>{
       if(trailerUrl){
           settrailerUrl('');
       }else{
           movieTrailer(movie?.name||"").then(url=>{
const urlParms=new URLSearchParams(new URL(url).search);
settrailerUrl(urlParms.get('v'));
           }).catch((error)=>console.log(error))
       }
   }
    return (
        <div className="row">
            {/* title*/}
            {title}
            <div className="row_posters">
                {/*poster*/} 
                {movies.map(movie=>(
                 <img 
                 key={movie.id}
                 onClick={()=>handleClick(movie)}
                 className={`row_poster ${isLargeRow && "row__posterLarge"}`}
                 src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
          { trailerUrl &&<YouTube videoId={trailerUrl}opts={opts}/>}

        </div>
    )
}

export default Row
