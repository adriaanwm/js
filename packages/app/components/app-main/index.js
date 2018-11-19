import Preact from 'preact'
import createStore from 'unistore'
import {Provider} from 'unistore/preact'
import {Router} from '@jsbit/react-unistore-router'
import devtools from 'unistore/devtools'
import adminRoutes from '../app-admin/routes'
import lazy from '../util-lazy'

const store = devtools(createStore({
  currentPath: window.location.pathname + window.location.hash
}))

const routes = {
  home: {path: '/', component: () => <div>Home</div>},
  signup: {path: 'signup', component: () => <div>Signup</div>},
  admin: {
    routes: adminRoutes,
    component: lazy(import('../app-admin'))
  }
}

export default () =>
  <Provider store={store}>
    <div>
      <h1>Main App</h1>
      <div>
        <a href='/'>Home</a>
        <a href='/signup'>Signup</a>
        <a href='/admin/login'>Login</a>
      </div>
      <Router routes={routes} />
    </div>
  </Provider>
