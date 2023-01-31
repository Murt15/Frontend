import React from "react";
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMoviesHandler = async () => {
    try {
      const response = await fetch("https://swapi.py4e.com/api/films/");
      const data = await response.json();
      const transformedMovies = data.results.map((data) => {
        return {
          id: data.episode_id,
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
