import React, { Component } from "react";

class Gallery extends Component {
  state = { movies: [] };

  fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?apikey=9eceb079&s=${this.props.saga}`)
      .then((response) => response.json())
      .then((moviesObject) => this.setState({ movies: moviesObject.Search }));
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="gallery row">
        <h2>{this.props.saga}</h2>
        <div className="movie-row">
          {this.state.movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Gallery;
