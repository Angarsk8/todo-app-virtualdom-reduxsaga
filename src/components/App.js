import { html } from '../utils'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'

function App() {
  return html`
    <div>
      ${AddTodo()}
      ${VisibleTodoList()}
      ${Footer()}
    </div>
  `
}

export default App
