import { createRoot } from 'react-dom/client'
import './index.css'
import { createElement } from 'react'

const root = createRoot(document.getElementById('root'))
const reactElement = createElement(<h1>Hello, <span>world</span>!</h1>)

root.render(reactElement)
