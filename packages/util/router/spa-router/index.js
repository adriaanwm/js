import findMatchingRoute from '@jsbit/find-matching-route'
import equal from '@jsbit/equal'

export const router = ({
  routes,
  currentPath,
  currentRoute,
  setCurrentRoute,
  notFound
}) => {
  const match = findMatchingRoute(routes, currentPath)
  if (match) {
    const newRoute = {
      path: match.definition.path,
      name: match.definition.name,
      args: match.args,
      ...typeof window !== 'undefined' && {
        url: `${window.location.protocol}//${window.location.host}${currentPath}`
      }
    }
    if (!equal(currentRoute, newRoute)) {
      setCurrentRoute(newRoute)
    }
    return match.component
  } else {
    return notFound
  }
}
