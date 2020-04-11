import { html } from 'lit-html'
import { storiesOf } from '@storybook/web-components'

import './App'

storiesOf('App', module).add('default', () => {
  return html`<my-app name="storybook" />`
})
