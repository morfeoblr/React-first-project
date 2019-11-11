import home from '../ui/home';
import { connect } from 'react-redux';
import { changePage } from '../../actions';

const mapDispatchToProps = dispatch =>
  ({
    updateCurrentPage(page) {
      dispatch(
        changePage(page)
      )
    }
  })

export default connect(null, mapDispatchToProps)(home)