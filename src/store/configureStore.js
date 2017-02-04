import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import * as constants from '../constants'
import { saveTodos } from '../utils'
import reducers from '../reducers'
import sagas from '../sagas'

const saveMiddleware = store => next => action => {
  const result = next(action)

  if (
    action.type === constants.DELETE_TODO_SUCCESS ||
    action.type === constants.ADD_TODO_SUCCESS
  ) {
    saveTodos(store.getState().todos)
  }

  return result
}

function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  let middlewares = [sagaMiddleware]

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [ ...middlewares, createLogger() ]
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middlewares, saveMiddleware)
    )
  )

  sagaMiddleware.run(sagas)

  return store
}

export default configureStore
