import * as constants from '../constants'

function visibilityFilter(state = constants.SHOW_ALL, action) {
  switch (action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
