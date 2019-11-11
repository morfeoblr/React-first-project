import React from 'react';

const viewOptions = ({ searchInput = '', pageNumber = 1, foundMovies = {},
  resetFilters = f => f, onPageNumberUpdate = f => f }) => {

  const errorWrapper = message => {
    if (message === 'Something went wrong.') return 'Please specify your Search using the filters below.';
    return message;
  }

  const hanldeNumberPageUpdate = e => {
    if (Number.isInteger(+e.target.value) && e.target.value > 0 && foundMovies.moviesResponse.totalResults >= (e.target.value - 1) * 10) {
      onPageNumberUpdate(searchInput, +e.target.value);
    }
  }

  const getNumberOfPages = (totalResults, itemsPerPage) => {
    return Math.ceil(totalResults / itemsPerPage);
  }

  return (
    <div className="view_options">
      <div className="filterButtons">
        <button onClick={resetFilters}>Reset selected</button>
      </div>
      {foundMovies.moviesResponse.Response === 'True' ?
        <div className="pagination">
          <span className="count">{foundMovies.moviesResponse.totalResults} items returned</span>
          <div className="paginationInput">
            <span>Page</span>
            <form className="pagination_form">
              <div className="number_input">
                <input type="text" className="pagination_input" value={pageNumber}
                  onChange={hanldeNumberPageUpdate}></input>
              </div>
            </form>
            <span>of {getNumberOfPages(foundMovies.moviesResponse.totalResults, 10)}</span>
          </div>
        </div>
        :
        <div className="filterButtons">
          {errorWrapper(foundMovies.moviesResponse.Error)}
        </div>
      }
    </div>
  );
}

export default viewOptions;