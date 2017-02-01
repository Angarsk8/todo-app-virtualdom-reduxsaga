import { setVisibilityFilter } from '../actions'
import { connect } from '../utils'
import Link from '../components/Link'

function mapStateToProps({ visibilityFilter }, { filter }) {
  return {
    active: visibilityFilter === filter
  }
}

function mapActionsToProps(dispatch, { filter }) {
  return {
    onSetFilter() {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapActionsToProps
)(Link)

export default FilterLink
