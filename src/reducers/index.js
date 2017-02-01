import * as constants from '../constants'
import { combineReducers } from 'redux'
import todos, { getAllTodos as _getAllTodos } from './todos'

function isInputDisabled(state = false, action) {
  switch (action.type) {
    case constants.TOGGLE_INPUT:
      return !state
    default:
      return state
  }
}

function isFetchingTodos(state = false, action) {
  switch (action.type) {
    case constants.TOGGLE_LOADING:
      return !state
    default:
      return state
  }
}

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
  isInputDisabled,
  isFetchingTodos,
  visibilityFilter
})

export default reducers

export function getAllTodos({ todos, visibilityFilter }) {
  return _getAllTodos(todos, visibilityFilter)
}
