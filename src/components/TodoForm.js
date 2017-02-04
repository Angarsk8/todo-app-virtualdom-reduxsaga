import { html } from '../utils'
import Loading from './Loading'

function TodoForm({ isDisabled, onAddTodo }) {
  let inputStyles = {}

  if (isDisabled) {
    inputStyles = {
      backgroundColor: 'rgba(255, 250, 207, 0.5)',
      borderColor: 'rgb(254, 245, 183)',
      borderStyle: 'solid'
    }
  }

  return html`
    <form
      onsubmit=${e => {
        e.preventDefault()
        const input = document.getElementById('todo-input')
        const value = input.value.trim()

        if (value) {
          onAddTodo(value)
          input.value = ''
        }
      }}
    >
      <input
        id="todo-input"
        type="text"
        ${isDisabled ? 'disabled' : ''}
        style=${inputStyles}
        autofocus
      />
      ${isDisabled ? Loading() : ''}
    </form>
  `
}

export default TodoForm
