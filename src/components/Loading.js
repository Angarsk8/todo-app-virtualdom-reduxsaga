import { html } from '../utils'
import 'text-spinners'

function Loading(props) {
  return html`
    <span>
      ${props && props.message ? props.message : ''}
      <span class="loading dots"></span>
    </span>
  `
}

export default Loading
