import Preact from 'preact'
import {Router} from '@jsbit/react-unistore-router'
import routes from './routes'

export default () =>
  <div>
    <h2>Admin App</h2>
    <hr />
    <Router routes={routes} />
  </div>
