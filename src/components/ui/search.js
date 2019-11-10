import React from 'react';
import MoviesList from '../containers/moviesList';
import ViewOptions from '../containers/viewOptions';
import Filters from '../containers/filters';

const Search = () => {

  return (
    <article>
      <div className="search-header_root">Search to be here!</div>
      <div className="content_root">
        <ViewOptions />
        <div className="content_columns">
          <Filters />
          <MoviesList />
        </div>
      </div>
    </article>
  );
}

export default Search;