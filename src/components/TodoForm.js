import { html } from '../utils'

function TodoForm({ isDisabled, onAddTodo }) {
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
        autofocus
      />
    </form>
  `
}

export default TodoForm
