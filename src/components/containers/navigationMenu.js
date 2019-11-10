import navigationMenu from '../ui/navigationMenu';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>
  ({
    currentPage: state.currentPage,
  })

export default connect(mapStateToProps)(navigationMenu)