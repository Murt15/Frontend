import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/c223747681fe49649ab615cd23fff9b4/movies"
      );
      console.log(response);
      // if (!response.ok) {
      //   throw new Error("Something went wrong!");
      // }

      //const data = await response.json();

      const transformedMovies = response.data.map((movieData) => {
        return {
          id: movieData._id,
          title: movieData.title,
          openingText: movieData.openingText,
          releaseDate: movieData.releaseDate,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function deleteMovieHandler(id) {
    const res = await axios.delete(
      `https://crudcrud.com/api/c223747681fe49649ab615cd23fff9b4/movies/${id}`
    );
    console.log(res);
  }
  async function addMovieHandler(movie) {
    console.log(movie);
    const response = await axios.post(
      "https://crudcrud.com/api/c223747681fe49649ab615cd23fff9b4/movies",
      movie
    );
    console.log(response);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} onDelete={deleteMovieHandler} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
