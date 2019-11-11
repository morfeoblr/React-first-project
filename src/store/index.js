import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// only for debugging
const consoleMessages = store => next => action => {
  let result;
  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('currentPage', store.getState().currentPage);
  console.log('searchInput', store.getState().searchInput);
  console.log('foundMovies', store.getState().foundMovies);
  result = next(action);
  let { currentPage, searchInput, foundMovies } = store.getState();
  console.log(`
    current page: ${currentPage}
    search input: ${searchInput}
    fetching status: ${JSON.stringify(foundMovies.fetching)}
    found movies: ${JSON.stringify(foundMovies)}
  `);
  console.groupEnd();
  return result;
}

export default (initialState = {}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}
