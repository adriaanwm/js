import component from '@jsbit/component'

export const lifecycle = hooks => Component => component({
  ...hooks,
  render () {
    return <Component {...this.state} {...this.props} />
  }
})

export default lifecycle
