import React, { useEffect, useState } from "react";

const Gallery = ({ title, ids }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const promises = ids.map((id) =>
          fetch(`http://www.omdbapi.com/?apikey=9eceb079&i=${id}`).then(
            (response) => response.json()
          )
        );
        const moviesData = await Promise.all(promises);
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [ids]);

  return (
    <div className="gallery">
      <h2>{title}</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
