import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// only for debugging
const consoleMessages = store => next => action => {
  let result;
  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('currentPage', store.getState().currentPage);
  console.log('searchInput', store.getState().search.searchInput);
  console.log('foundMovies', store.getState().search.foundMovies);
  result = next(action);
  let { currentPage, search } = store.getState();
  console.log(`
    current page: ${currentPage}
    search input: ${search.searchInput}
    fetching status: ${JSON.stringify(search.foundMovies.fetching)}
    found movies: ${JSON.stringify(search.foundMovies)}
  `);
  console.groupEnd();
  return result;
}

export default (initialState = {}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}
