import Preact from 'preact'

export default promise => class extends Preact.Component {
  constructor (props) {
    super(props)
    promise
      .then(res => {this.setState({Component: res.default})})
      .catch(err => console.error(err))
  }
  render (props, {Component}) {
    if (Component)
      return <Component />
    return <h1>Loading..</h1>
  }
}
