import contacts from '../ui/contacts';
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

export default connect(null, mapDispatchToProps)(contacts)