import C from './constants';

export const updatePageNumber = number =>
  ({
    type: C.UPDATE_PAGE_NUMBER,
    payload: number
  })

export const updateSearchInput = text =>
  ({
    type: C.UPDATE_SEARCH_INPUT,
    payload: text
  })

export function saveMovie(title, year, posterURL = 'N/A', rate = 'N/A', genre = 'N/A') {
  return {
    type: C.SAVE_MOVIE,
    payload: { title, year, posterURL, rate, genre }
  }
}

export const removeMovie = function (id) {
  return {
    type: C.REMOVE_MOVIE,
    payload: id
  }
}

export const changePage = page =>
  ({
    type: C.NAVIGATE_TO,
    payload: page
  })

export const getMovies = (input = '', pageNumber = 1) => dispatch => {
  dispatch({
    type: C.START_FETCHING
  });
  setTimeout(() => {
    fetch(`http://www.omdbapi.com/?apikey=e45d6be4&s=${input}&page=${pageNumber}`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: C.GET_MOVIES,
          payload: data
        })
      })
      .catch(error => {
        dispatch({
          type: C.CANCEL_FETCHING
        })
      })
  }, 1000) // delay is set only for spinner verification
}
