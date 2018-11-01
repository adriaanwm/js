import {router} from '@jsbit/spa-router'

const getLink = ev => {
  let t = ev.target
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      return t
    }
  } while ((t = t.parentNode))
}

export const init = ({dispatch, set, withState}) => {
  // handleBrowserBackAndForward
  if (typeof window !== 'undefined') {
    window.onpopstate = ev => {
      dispatch(set(
        'currentPath',
        (window.location.pathname + window.location.search)
      ))
    }
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
        dispatch(set('currentPath', path))
      }
    })
  }

  return {
    route: (path, replaceState, noScroll) => {
      if (typeof window !== 'undefined') {
        if (replaceState) {
          window.history.replaceState(null, null, path)
        } else {
          window.history.pushState(null, null, path)
        }
        !noScroll && window.scrollTo(0, 0)
      }
      const guaranteedPath = path.startsWith('http')
        ? `/${path.slice(8).split('/').slice(1).join('/')}`
        : path
      dispatch(set('currentPath', guaranteedPath))
    },
    Router: withState(state => ({
      currentPath: state.currentPath,
      currentRoute: state.route
    }))(({currentPath, currentRoute, routes}) => {
      const Component = router({
        routes,
        setCurrentRoute: route => dispatch(set('route', route)),
        currentRoute,
        notFound: () => <div>Not Found!</div>,
        currentPath
      })
      return Component ? <Component /> : null
    })
  }
}
