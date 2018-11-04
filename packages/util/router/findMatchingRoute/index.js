import routeMatch from '@jsbit/route-match'

export const findMatchingRoute = (routes, currentPath) => {
  for (let name in routes) {
    const route = routes[name]
    if (route.routes) {
      const match = findMatchingRoute(route.routes, currentPath)
      if (match) {
        return {
          component: route.component,
          args: match.args,
          definition: match.definition
        }
      }
    } else {
      const args = routeMatch(currentPath, route.path)
      if (args) {
        return {
          component: route.component,
          args,
          definition: {name, path: route.path}
        }
      }
    }
  }
}

export default findMatchingRoute
