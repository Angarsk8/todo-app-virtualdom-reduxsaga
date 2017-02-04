import { html } from '../utils'
import Loading from './Loading'

function Todo({ id, text, completed, valid, onToggleTodo, onDeleteTodo }) {
  return html`
    <li id=${id}>
      <span
        onclick=${() => {
          onDeleteTodo(id)
        }}
        style=${{
          color: 'red',
          marginLeft: '5px',
          marginRight: '10px',
          cursor: 'pointer'
        }}
      >x</span>
      <span
        onclick=${() => {
          onToggleTodo(id)
        }}
        style=${{
          textDecoration: `${ completed ? 'line-through' : 'none' }`,
          backgroundColor: `${ !valid ? 'rgb(255, 250, 207)' : '' }`
        }}
      >${text}</span>
      ${!valid ? Loading() : ''}
    </li>
  `
}

export default Todo
