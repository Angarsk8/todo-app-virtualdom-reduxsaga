import { html } from '../utils'
import Todo from './Todo'

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return html`
    <ul>
      ${todos.map(todo => (
        Todo({ ...todo, onToggleTodo, onDeleteTodo })
      ))}
    </ul>
  `
}

export default TodoList
