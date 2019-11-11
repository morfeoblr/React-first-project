import React from 'react';
import Popup from "reactjs-popup";
import MovieDetails from "../ui/movieDetails";

const movieTile = props => {
  return (
    <div key={props.movie.imdbID} className="tileDisplay">
      <div className="tileItem">
        <div className="tileImage">
          <div className="imgRoot">
            {props.movie.Poster === 'N/A' ? <div>Poster not available</div>
              : <img className="img_img" src={props.movie.Poster} alt="thumbnail" />}
          </div>
        </div>
      </div>
      <div className="tileInfo">
        <div className="tileLabel">
          <div>Title: {props.movie.Title}</div>
          <div>Type: {props.movie.Type}</div>
          <div>Year: {props.movie.Year}</div>
        </div>
        <div className="button_wrapper">
          <Popup modal trigger={<button>Get more details</button>}>
            {close =>
              <MovieDetails
                close={close}
                movieId={props.movie.imdbID}
                movieTitle={props.movie.Title}
              />
            }
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default movieTile;