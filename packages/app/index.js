import Preact from 'preact'

const App = ({name, ...props}) =>
  <div>
    <p>Hello {name}</p>
  </div>

Preact.render(
  <App name='bob' />,
  document.getElementById('app'),
  document.getElementById('app').children[0]
)
