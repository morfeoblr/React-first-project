import filters from '../ui/filters';
import { connect } from 'react-redux';
import { updateSearchInput, getMovies, updatePageNumber } from '../../actions';

const mapStateToProps = state =>
  ({
    searchInput: state.searchInput,
  })

const mapDispatchToProps = dispatch =>
  ({
    onUpdate(value) {
      dispatch(
        updateSearchInput(value)
      );
      dispatch(
        updatePageNumber(1)
      );
      dispatch(
        getMovies(value)
      )
    },
  })

export default connect(mapStateToProps, mapDispatchToProps)(filters)