import contacts from '../ui/contacts';
import { connect } from 'react-redux';
import { changePage } from '../../actions';

const mapStateToProps = state =>
  ({
    currentPage: state.currentPage,
  })

const mapDispatchToProps = dispatch =>
  ({
    updateCurrentPage(page) {
      dispatch(
        changePage(page)
      )
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(contacts)