import vdom from 'virtual-dom'
import hx from 'hyperx'
import store from '../store'

export function loadState() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState) {
      return JSON.parse(serializedState)
    }

    return undefined
  } catch (_) {
    return undefined
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
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
