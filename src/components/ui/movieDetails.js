import React, { Component } from "react";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loadingMovie: false,
    }
  }

  componentDidMount() {
    this.fetchMovieById(this.props.movieId);
  }

  fetchMovieById(movieId) {
    this.setState({ loadingMovie: true });
    setTimeout(() => {
      fetch(`http://www.omdbapi.com/?apikey=e45d6be4&i=${movieId}&plot=full`)
        .then(movie => movie.json())
        .then(movie => this.setState({
          movie: movie,
          loadingMovie: false
        }))
    }, 1000) // delay is set only for spinner verification
  }

  getMovieDetailsInTags() {
    const { Title, Year, Released, Runtime, Genre, Actors, Plot, imdbRating, Type } = this.state.movie;
    return (
      <>
        <div key="Title"><b>Title</b>: {Title}</div>
        <div key="Year"><b>Year</b>: {Year}</div>
        <div key="Released"><b>When released</b>: {Released}</div>
        <div key="Runtime"><b>Time</b>: {Runtime}</div>
        <div key="Genre"><b>Genre</b>: {Genre}</div>
        <div key="Actors"><b>Main actors</b>: {Actors}</div>
        <div key="Plot"><b>Full plot</b>: {Plot}</div>
        <div key="imdbRating"><b>Imbd rating</b>: {imdbRating}</div>
        <div key="Type"><b>Type</b>: {Type}</div>
      </>
    );
  }

  render() {
    return (
      <div className="modal" >
        <button className="close" onClick={this.props.close}>
          &times;
        </button>
        <div className="header">Selected item: {this.props.movieTitle}</div>
        <div className="content">
          {this.state.loadingMovie ?
            <div className="spinner"></div>
            :
            <>
              {this.getMovieDetailsInTags()}
            </>
          }
        </div>
      </div>
    );
  }
}

export default MovieDetails;