import * as constants from '../constants'
import { combineReducers } from 'redux'

function byId(state = {}, action) {
  switch (action.type) {
    case constants.ADD_TODO:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          text: action.text,
          completed: false
        }
      }
    case constants.TOGGLE_TODO:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: !state[action.id].completed
        }
      }
    case constants.DELETE_TODO:
      const newState = { ...state }
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

function allIds(state = [], action) {
  switch (action.type) {
    case constants.ADD_TODO:
      return [ ...state, action.id ]
    case constants.DELETE_TODO:
      return state.filter(id => id !== action.id)
    default:
      return state
  }
}

const todos = combineReducers({
  byId,
  allIds
})

export default todos

export function getAllTodos({ byId, allIds }, filter) {
  const allTodos = allIds.map(id => byId[id])
  switch (filter) {
    case constants.SHOW_ALL:
      return allTodos
    case constants.SHOW_ACTIVE:
      return allTodos.filter(todo => !todo.completed)
    case constants.SHOW_COMPLETED:
      return allTodos.filter(todo => todo.completed)
    default:
      return allTodos
  }
}
