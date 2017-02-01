import { toggleTodoRequest, deleteTodoRequest } from '../actions'
import { getAllTodos } from '../reducers'
import { connect } from '../utils'
import TodoList from '../components/TodoList'

function mapStateToProps(state) {
  return {
    todos: getAllTodos(state),
    isFetching: state.isFetchingTodos
  }
}

function mapActionsToProps(dispatch) {
  return {
    onToggleTodo(id) {
      dispatch(toggleTodoRequest(id))
    },
    onDeleteTodo(id) {
      dispatch(deleteTodoRequest(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapActionsToProps
)(TodoList)

export default VisibleTodoList
