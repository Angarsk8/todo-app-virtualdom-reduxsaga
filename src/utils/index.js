import vdom from 'virtual-dom'
import hx from 'hyperx'
import store from '../store'

export function loadTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const serializedState = localStorage.getItem('todos')
      if (serializedState) {
        resolve(JSON.parse(serializedState))
      } else {
        reject('Failed trying to fetch the persisted todo state')
      }
    }, 1000)
  })
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

export function createBinaryReducer(actionConstant, initialState = false) {
  return function (state = initialState, action) {
    switch (action.type) {
      case actionConstant:
        return !state
      default:
        return state
    }
  }
}
