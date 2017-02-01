import { html } from '../utils'

function Link({ active, children, onSetFilter }) {
  if (active) {
    return html`
      <span>${html`${children}`}</span>
    `
  }

  return html`
    <a
      href="#"
      onclick=${e => {
        e.preventDefault()
        onSetFilter()
      }}
    >
      ${html`${children}`}
    </a>
  `
}

export default Link
