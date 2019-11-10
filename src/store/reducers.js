import C from '../constants';
import { combineReducers } from 'redux'

export const pageNumber = (state = 1, action) =>
  (action.type === C.UPDATE_PAGE_NUMBER) ?
    action.payload :
    state

export const searchInput = (state = '', action) =>
  (action.type === C.UPDATE_SEARCH_INPUT) ?
    action.payload :
    state

export const currentPage = (state = 'home', action) =>
  (action.type === C.NAVIGATE_TO) ?
    action.payload :
    state

export const saveMovie = (state = null, action) =>
  (action.type === C.SAVE_MOVIE) ?
    action.payload :
    state

export const savedMovies = (state = [], action) => {
  switch (action.type) {
    case C.SAVE_MOVIE:
      const hasTheMovieAlready = state.some(movie => movie.id === action.payload.id)
      return (hasTheMovieAlready) ?
        state : [
          ...state,
          saveMovie(null, action)
        ]
    case C.REMOVE_MOVIE:
      return state.filter(movie => movie.id !== action.payload);
    default:
      return state
  }
}

export const fetching = (state = false, action) => {
  switch (action.type) {
    case C.START_FETCHING:
      return true
    case C.CANCEL_FETCHING:
      return false
    case C.GET_MOVIES:
      return false
    default:
      return state
  }
}

export const moviesResponse = (state = {}, action) => {
  switch (action.type) {
    case C.GET_MOVIES:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  pageNumber,
  searchInput,
  currentPage,
  savedMovies,
  foundMovies: combineReducers({
    fetching,
    moviesResponse
  })
})