import { addTodoRequest } from '../actions'
import { connect } from '../utils'
import TodoForm from '../components/TodoForm'

function mapStateToProps({ isInputDisabled }) {
  return {
    isDisabled: isInputDisabled
  }
}

function mapActionsToProps(dispatch) {
  return {
    onAddTodo(text) {
      dispatch(addTodoRequest(text))
    }
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapActionsToProps
)(TodoForm)

export default AddTodo
