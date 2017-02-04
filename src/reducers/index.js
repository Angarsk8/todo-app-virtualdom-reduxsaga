import { combineReducers } from 'redux'
import * as constants from '../constants'
import { createBinaryReducer } from '../utils'
import todos, { getAllTodos as _getAllTodos } from './todos'

function visibilityFilter(state = constants.SHOW_ALL, action) {
  switch (action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const reducers = combineReducers({
  todos,
  isInputDisabled: createBinaryReducer(constants.TOGGLE_INPUT),
  isFetchingTodos: createBinaryReducer(constants.TOGGLE_LOADING),
  visibilityFilter
})

export default reducers

export function getAllTodos({ todos, visibilityFilter }) {
  return _getAllTodos(todos, visibilityFilter)
}
