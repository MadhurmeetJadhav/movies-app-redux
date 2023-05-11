import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const { movies } = useSelector((state) => state.movies);
  // console.log(movies);

  // console.log(renderMovies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.length > 0 ? (
            movies.map((movie, i) => <MovieCard key={i} data={movie} />)
          ) : (
            <div className="movies-error">
              {" "}
              <h3> None </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
