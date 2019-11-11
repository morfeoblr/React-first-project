import moviesList from '../ui/moviesList';
import { connect } from 'react-redux';

const mapStateToProps = state =>
  ({
    foundMovies: state.foundMovies,
  })

export default connect(mapStateToProps)(moviesList)