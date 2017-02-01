import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { loadTodos } from '../utils'
import * as constants from '../constants'
import * as actions from '../actions'

function* fetchTodosRequest(action) {
  yield put(actions.toggleLoading())
  yield call(delay, 1000)
  yield put(actions.setTodos(loadTodos()))
  yield put(actions.toggleLoading())
}

function* addTodoRequest(action) {
  yield put(actions.toggleInput())
  yield call(delay, 300)
  yield put(actions.addTodo(action.text))
  yield put(actions.toggleInput())
}

function* toggleTodoRequest(action) {
  yield put(actions.toggleTodoValidity(action.id))
  yield call(delay, 300)
  yield put(actions.toggleTodo(action.id))
  yield put(actions.toggleTodoValidity(action.id))
}

function* deleteTodoRequest(action) {
  yield put(actions.toggleTodoValidity(action.id))
  yield call(delay, 300)
  yield put(actions.toggleTodoValidity(action.id))
  yield put(actions.deleteTodo(action.id))
}

function* watchAddTodo() {
  yield takeLatest(constants.ADD_TODO_REQUEST, addTodoRequest)
}

function* watchToggleTodo() {
  yield takeLatest(constants.TOGGLE_TODO_REQUEST, toggleTodoRequest)
}

function* watchDeleteTodo() {
  yield takeLatest(constants.DELETE_TODO_REQUEST, deleteTodoRequest)
}

export default function* rootSaga() {
  yield [
    fetchTodosRequest(),
    watchAddTodo(),
    watchToggleTodo(),
    watchDeleteTodo()
  ]
}
