import React from 'react';
import MovieTile from "../ui/movieTile";

const moviesList = ({ foundMovies = {} }) => {
  return (
    <div className="searchContentResults">
      <div className="results_content">
        {foundMovies.fetching ?
          <div className="spinner"></div>
          :
          foundMovies.moviesResponse.Response === 'True' ? <> {
            foundMovies.moviesResponse.Search.map(movie => <MovieTile movie={movie} />)
          }
          </>
            : <> No results found </>
        }
      </div>
    </div >
  );
}

export default moviesList;