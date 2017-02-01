import { html } from '../utils'
import Todo from './Todo'
import 'text-spinners'

function TodoList({ todos, onToggleTodo, onDeleteTodo, isFetching }) {
  if (isFetching) {
    return html`
      <span>Loading <span class="loading dots"></span></span>
    `
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
