import * as constants from '../constants'
import { combineReducers } from 'redux'

function byId(state = {}, action) {
  switch (action.type) {
    case constants.FETCH_TODOS_RESPONSE:
      return action.todos.byId
    case constants.ADD_TODO_SUCCESS:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          text: action.text,
          completed: false,
          valid: true
        }
      }
    case constants.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: !state[action.id].completed
        }
      }
    case constants.TOGGLE_TODO_VALIDITY:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          valid: !state[action.id].valid
        }
      }
    case constants.DELETE_TODO_SUCCESS:
      const newState = { ...state }
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

function allIds(state = [], action) {
  switch (action.type) {
    case constants.FETCH_TODOS_RESPONSE:
      return action.todos.allIds
    case constants.ADD_TODO_SUCCESS:
      return [ ...state, action.id ]
    case constants.DELETE_TODO_SUCCESS:
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
