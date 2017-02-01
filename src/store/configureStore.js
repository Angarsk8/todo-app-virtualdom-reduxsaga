import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import { saveTodos } from '../utils'
import reducers from '../reducers'
import sagas from '../sagas'

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
      applyMiddleware(...middlewares)
    )
  )

  store.subscribe(() => {
    const todos = store.getState().todos
    if(todos.allIds.length > 0) {
      saveTodos(store.getState().todos)
    }
  })

  sagaMiddleware.run(sagas)

  return store
}

export default configureStore
