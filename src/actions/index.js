import { v4 } from 'node-uuid'
import * as constants from '../constants'

export function addTodo(text) {
  return {
    type: constants.ADD_TODO,
    id: v4(),
    text: text
  }
}

export function toggleTodo(id) {
  return {
    type: constants.TOGGLE_TODO,
    id: id
  }
}

export function deleteTodo(id) {
  return {
    type: constants.DELETE_TODO,
    id: id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: constants.SET_VISIBILITY_FILTER,
    filter: filter
  }
}
