import * as fx from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { loadTodos } from '../utils'
import * as constants from '../constants'
import * as actions from '../actions'

function* fetchTodosRequest(action) {
  try {
    yield fx.put(actions.toggleLoading())

    const response = yield fx.call(loadTodos)
    yield fx.put(actions.setTodos(response))

    yield fx.put(actions.toggleLoading())
  } catch (_) {
    yield fx.put(actions.toggleLoading())
  }
}

function* addTodoRequest(action) {
  yield fx.put(actions.toggleInput())
  yield fx.call(delay, 500)

  yield fx.put(actions.addTodo(action.text))
  yield fx.put(actions.toggleInput())
}

function* toggleTodoRequest(action) {
  yield fx.put(actions.toggleTodoValidity(action.id))
  yield fx.call(delay, 300)
  yield fx.put(actions.toggleTodo(action.id))
  yield fx.put(actions.toggleTodoValidity(action.id))
}

function* deleteTodoRequest(action) {
  yield fx.put(actions.toggleTodoValidity(action.id))
  yield fx.call(delay, 300)
  yield fx.put(actions.toggleTodoValidity(action.id))
  yield fx.put(actions.deleteTodo(action.id))
}

function* watchAddTodo() {
  let task
  while (true) {
    const action = yield fx.take(constants.ADD_TODO_REQUEST)

    if (task) {
      yield fx.cancel(task)
    }

    task = yield fx.fork(addTodoRequest, action)
  }
}

function* watchToggleTodo() {
  yield fx.throttle(500, constants.TOGGLE_TODO_REQUEST, toggleTodoRequest)
}

function* watchDeleteTodo() {
  yield fx.takeLatest(constants.DELETE_TODO_REQUEST, deleteTodoRequest)
}

export default function* rootSaga() {
  yield [
    fetchTodosRequest(),
    watchAddTodo(),
    watchToggleTodo(),
    watchDeleteTodo()
  ]
}
