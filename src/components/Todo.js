import { html } from '../utils'

function Todo({ id, text, completed, onToggleTodo, onDeleteTodo }) {
  return html`
    <li id=${id}>
      <span
        onclick=${() => {
          onDeleteTodo(id)
        }}
        style=${{
          'color': 'red',
          'margin-right': '10px',
          'cursor': 'pointer'
        }}
      >x</span>
      <span
        onclick=${() => {
          onToggleTodo(id)
        }}
        style=${{
          'text-decoration': `${ completed ? 'line-through' : 'none' }`
        }}
      >${text}</span>
    </li>
  `
}

export default Todo
