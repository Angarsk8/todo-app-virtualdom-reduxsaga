import vdom from 'virtual-dom'
import hx from 'hyperx'
import store from '../store'

export function loadTodos() {
  try {
    const serializedState = localStorage.getItem('todos')
    if (serializedState) {
      return JSON.parse(serializedState)
    }

    return undefined
  } catch (_) {
    return undefined
  }
}

export function saveTodos(todos) {
  try {
    const serializedState = JSON.stringify(todos)
    localStorage.setItem('todos', serializedState)
  } catch (e) {
    console.log(`The state couldn't be saved: ${e.message}`)
  }
}

export function connect(stateToProps, actionsToProps) {
  const { getState, dispatch } = store
  return function (component) {
    return function (props) {
      return component({
        ...stateToProps(getState(), props),
        ...actionsToProps(dispatch, props),
        ...props
      })
    }
  }
}

export const html = hx(vdom.h)
