import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import {DetailCard} from "../components/DetailCard/index"


const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const {REACT_APP_API_KEY} = process.env;
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const DetailContext = createContext();


export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState()
    const {id} = useParams();

    useEffect(() => {
        axios
          .get(movieDetailBaseUrl+id, {
            params: {
              api_key: REACT_APP_API_KEY,
            },
          })
          .then(res=>setMovieDetails(res?.data))
          .catch()
          .finally();
      }, [id]);

    return (
        <DetailContext.Provider value={{baseImageUrl ,movieDetails}}>
          <DetailCard />
        </DetailContext.Provider>
    )
  }
  
  // <h1>{movieDetails?.original_title}</h1> 
  // <StyledMovieImage src={baseImageUrl+movieDetails?.poster_path} alt={"Movie Poster"}/>
  // <p>{movieDetails?.overview}</p> 