import {connect} from 'unistore/preact'
import {lifecycle} from '@jsbit/lifecycle'
import request from '@jsbit/request'

const xhrs = {}
const abort = url => xhrs[url].abort()
const get = (url, store) => {
  const {promise, xhr} = request({url})
  promise.then(res => store.setState({requests: {[url]: {result: res}}}))
  xhrs[url] = xhr
}

export const withRequest = (mapper) => Component => {
  const conn = connect((state, props) => {
    const req = mapper(state, props)
    const _name = Object.keys(req)[0]
    const _url = req[_name]
    const value = (state.requests || {})[_url]
    return {_name, _url, [_name]: value}
  })
  const life = lifecycle({
    componentDidMount () {
      this.props._url && get(this.props._url, this.props.store)
    },
    componentDidUpdate (prevProps) {
      if (prevProps._url !== this.props._url) {
        prevProps._url && abort(prevProps._url)
        this.props._url && get(this.props._url, this.props.store)
      }
    }
  })
  return conn(life(Component))
}

export default withRequest
