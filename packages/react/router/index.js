import {connect} from 'unistore/preact'
import {router} from '@jsbit/spa-router'

let storeRef

// handleBrowserBackAndForward
if (typeof window !== 'undefined') {
  window.onpopstate = ev => {
    storeRef && storeRef.setState({
      currentPath: (window.location.pathname + window.location.search)
    })
  }
}

const getLink = ev => {
  let t = ev.target
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      return t
    }
  } while ((t = t.parentNode))
}

// hijack link clicks and update currentPath in state
if (typeof window !== 'undefined') {
  document.addEventListener('click', ev => {
    const link = getLink(ev)
    if (link) {
      if (ev.metaKey) return
      if (link.getAttribute('native')) return
      ev.preventDefault()
      ev.stopImmediatePropagation()
      const noScroll = link.getAttribute('noScroll')
      const url = link.getAttribute('href')
      const path = url.startsWith('http')
        ? `/${url.slice(8).split('/').slice(1).join('/')}`
        : url
      !noScroll && window.scrollTo(0, 0)
      window.history['pushState'](null, null, url)
      storeRef.setState({currentPath: path})
    }
  })
}

export const Router = connect(state => ({
  currentPath: state.currentPath,
  currentRoute: state.route
}))(({currentPath, currentRoute, routes, store}) => {
  if (!storeRef) storeRef = store
  const Component = router({
    routes,
    setCurrentRoute: route => store.setState({route}),
    currentRoute,
    notFound: () => <div>Not Found!</div>,
    currentPath
  })
  return Component ? <Component /> : null
})

export const route = (url, replaceState, noScroll) => {
  if (typeof window !== 'undefined') {
    if (replaceState) {
      window.history.replaceState(null, null, url)
    } else {
      window.history.pushState(null, null, url)
    }
    !noScroll && window.scrollTo(0, 0)
  }
  const path = url.startsWith('http')
    ? `/${url.slice(8).split('/').slice(1).join('/')}`
    : url
  storeRef && storeRef.setState({currentPath: path})
}
