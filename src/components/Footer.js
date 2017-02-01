import * as constants from '../constants'
import { html } from '../utils'
import FilterLink from '../containers/FilterLink'

function Footer() {
  return html`
    <div>
      Show:
      ${FilterLink({
        filter: constants.SHOW_ALL,
        children: ' All, '
      })}
      ${FilterLink({
        filter: constants.SHOW_ACTIVE,
        children: 'Active, '
      })}
      ${FilterLink({
        filter: constants.SHOW_COMPLETED,
        children: 'Completed '
      })}
    </div>
  `
}

export default Footer
