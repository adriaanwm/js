# preact redux router

- Router built using @jsbit/router that works with preact and redux
- This is very tightly coupled with how we like to do routing @ Input Logic, for more generic routing see @jsbit/router.
- Requires a path reducer with `set` action creator `set(path, value)`

## Usage

initialize
```
import {init} from '@jsbit/preact-redux-router'
import withState from '/util/withState'
import {dispatch, set} from '/store'

export const {route, Router} = init({dispatch, set, withState})

export default Router
```
