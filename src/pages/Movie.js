import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import "../../src/App.css";
import { SearchBox } from "../components/SearchBox";
import { CardList } from "../components/CardList";

const {REACT_APP_API_KEY} = process.env;
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieContext= createContext();

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: REACT_APP_API_KEY,
          page: 1,
          query: searchKeyword,
        },
      })
      .then((res) => setMovieList(res?.data?.results))
      .catch()
      .finally();
  }, [searchKeyword]);

  return (
    <div className="App">
      <MovieContext.Provider value={{setSearchKeyword, movieList, baseImageUrl}}>
        <SearchBox/>
        <CardList/>
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;
