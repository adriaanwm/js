import Preact from 'preact'
import Main from './components/app-main'

Preact.render(
  <Main />,
  document.getElementById('app'),
  document.getElementById('app').children[0]
)
