import { html } from '../utils'

function Todo({ id, text, completed, valid, onToggleTodo, onDeleteTodo }) {
  if (!valid) {
    return html`
      <li><span class="loading dots"></span></li>
    `
  }

  return html`
    <li id=${id}>
      <span
        onclick=${() => {
          onDeleteTodo(id)
        }}
        style=${{
          'color': 'red',
          'margin-left': '5px',
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
