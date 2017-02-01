import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { loadState, saveState } from '../utils'
import reducers from '../reducers'

function saveMiddleware({ getState }) {
  return next => action => {
    next(action)
    saveState(getState())
  }
}

function configureStore() {
  let middlewares = [saveMiddleware]

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [ ...middlewares, createLogger() ]
  }

  const store = createStore(
    reducers,
    loadState(),
    applyMiddleware(...middlewares)
  )

  return store
}

export default configureStore
