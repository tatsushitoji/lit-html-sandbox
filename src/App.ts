import { component, html } from 'haunted'

type Props = {
  name: string
}

export const App = ({ name }: Props) => {
  return html`
    <div>
      <h1>Hello ${name}</h1>
    </div>
  `
}

customElements.define(
  'my-app',
  // FIXME component do not accept props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (component as any)(App, { observedAttributes: ['name'] })
)
