import { toggleTodo, deleteTodo } from '../actions'
import { getAllTodos } from '../reducers'
import { connect } from '../utils'
import TodoList from '../components/TodoList'

function mapStateToProps(state) {
  return {
    todos: getAllTodos(state)
  }
}

function mapActionsToProps(dispatch) {
  return {
    onToggleTodo(id) {
      dispatch(toggleTodo(id))
    },
    onDeleteTodo(id) {
      dispatch(deleteTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapActionsToProps
)(TodoList)

export default VisibleTodoList
