import { addTodo } from '../actions'
import { connect } from '../utils'
import TodoForm from '../components/TodoForm'

function mapActionsToProps(dispatch) {
  return {
    onAddTodo(text) {
      dispatch(addTodo(text))
    }
  }
}

const AddTodo = connect(
  () => ({}),
  mapActionsToProps
)(TodoForm)

export default AddTodo
