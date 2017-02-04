import { html } from '../utils'
import Loading from './Loading'
import Todo from './Todo'

function TodoList({ todos, onToggleTodo, onDeleteTodo, isFetching }) {
  if (isFetching) {
    return Loading({ message: 'Loading' })
  }

  return html`
    <ul>
      ${todos.map(todo => (
        Todo({ ...todo, onToggleTodo, onDeleteTodo })
      ))}
    </ul>
  `
}

export default TodoList
