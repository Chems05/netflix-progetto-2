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
    const moviesToDisplay = this.state.movies.slice(0, 6);
    return (
      <div className="gallery container">
        <h2>{this.props.saga}</h2>
        <div className="row">
          {moviesToDisplay.map((movie) => (
            <div
              key={movie.imdbID}
              className="movie col-lg-3 col-md-4 col-sm-6 mb-4"
            >
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
