import viewOptions from '../ui/viewOptions';
import { connect } from 'react-redux';
import { updateSearchInput, getMovies, updatePageNumber } from '../../actions';

const mapStateToProps = (state) =>
  ({
    searchInput: state.searchInput,
    pageNumber: state.pageNumber,
    foundMovies: state.foundMovies,
  })

const mapDispatchToProps = (dispatch) =>
  ({
    resetFilters() {
      dispatch(
        updateSearchInput('')
      );
      dispatch(
        updatePageNumber(1)
      );
      dispatch(
        getMovies('')
      )
    },
    onPageNumberUpdate(searchInput, pageNumber) {
      dispatch(
        updatePageNumber(pageNumber)
      );
      dispatch(
        getMovies(searchInput, pageNumber)
      )
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(viewOptions)