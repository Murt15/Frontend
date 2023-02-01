import React from "react";
import axios from "axios";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  async function deleteMovieHandler(id) {
    //console.log(id);
    const res = await axios.delete(
      `https://sharpener-d1685-default-rtdb.firebaseio.com/movies/${id}`
    );
    console.log(res);
  }
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDelete={() => {
            deleteMovieHandler(movie.id);
          }}
        />
      ))}
    </ul>
  );
};

export default MovieList;
