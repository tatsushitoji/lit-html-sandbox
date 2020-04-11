import { html, render } from 'lit-html'

import './App'

const renderApp = () => render(html`<my-app name="lit-html" />`, document.body)

renderApp()
