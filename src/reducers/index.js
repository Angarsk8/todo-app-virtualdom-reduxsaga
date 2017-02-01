import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos, { getAllTodos as _getAllTodos } from './todos'

const reducers = combineReducers({
  todos,
  visibilityFilter
})

export default reducers

export function getAllTodos({ todos, visibilityFilter }) {
  return _getAllTodos(todos, visibilityFilter)
}
