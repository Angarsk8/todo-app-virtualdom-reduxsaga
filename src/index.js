import createElement from 'virtual-dom/create-element'
import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'
import store from './store'
import App from './components/App'

let appTree = App()
let rootNode = createElement(appTree)
document.getElementById('root').appendChild(rootNode)

function render() {
  const newAppTree = App()
  const patchs = diff(appTree, newAppTree)
  rootNode = patch(rootNode, patchs)
  appTree = newAppTree
}

store.subscribe(render)
