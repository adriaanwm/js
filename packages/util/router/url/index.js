const queryString = obj => {
  const queries = []
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      queries.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }
  return queries.join("&")
}

const build = (root, nested) => (name, args, queries) => {
  const pieces = name.split('.')
  const defn = pieces.length === 1 ? root : nested[pieces[0]]
  const path = defn.paths[pieces[1] || name]
  const query = queries ? `?${queryString(queries)}` : ''
  const replaced = Object.keys(args || {}).reduce(
    (acc, k) => acc.replace(`:${k}`, args[k]),
    path
  )
  return `${defn.base}/${replaced}${query}`
}

export default build
