import { v4 } from 'node-uuid'
import * as constants from '../constants'

export function setTodos(todos) {
  return {
    type: constants.FETCH_TODOS_RESPONSE,
    todos: todos
  }
}

export function addTodoRequest(text) {
  return {
    type: constants.ADD_TODO_REQUEST,
    text: text
  }
}

export function addTodo(text) {
  return {
    type: constants.ADD_TODO_SUCCESS,
    id: v4(),
    text: text
  }
}

export function toggleTodoRequest(id) {
  return {
    type: constants.TOGGLE_TODO_REQUEST,
    id: id
  }
}

export function toggleTodo(id) {
  return {
    type: constants.TOGGLE_TODO_SUCCESS,
    id: id
  }
}

export function deleteTodoRequest(id) {
  return {
    type: constants.DELETE_TODO_REQUEST,
    id: id
  }
}

export function deleteTodo(id) {
  return {
    type: constants.DELETE_TODO_SUCCESS,
    id: id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: constants.SET_VISIBILITY_FILTER,
    filter: filter
  }
}

export function toggleInput() {
  return {
    type: constants.TOGGLE_INPUT
  }
}

export function toggleLoading() {
  return {
    type: constants.TOGGLE_LOADING
  }
}

export function toggleTodoValidity(id) {
  return {
    type: constants.TOGGLE_TODO_VALIDITY,
    id: id
  }
}
