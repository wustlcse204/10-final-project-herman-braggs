import React from "react";

const PLACEHOLDER =
  "https://orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? PLACEHOLDER : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img width="150" alt={`The movie titled: ${movie.Title}`} src={poster}/>
      </div>
      <h3>Release Year: {movie.Year}</h3>
    </div>
  );
};


export default Movie;