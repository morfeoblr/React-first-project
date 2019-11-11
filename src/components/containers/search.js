import search from '../ui/search';
import { connect } from 'react-redux';
import { changePage, updatePageNumber, getMovies } from '../../actions';

const mapStateToProps = state =>
  ({
    currentPage: state.currentPage,
    searchInput: state.searchInput,
  })

const mapDispatchToProps = dispatch =>
  ({
    updateCurrentPage(page) {
      dispatch(
        changePage(page)
      )
    },
    updateFoundMovies(input) {
      dispatch(
        updatePageNumber(1)
      );
      dispatch(
        getMovies(input)
      )
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(search)