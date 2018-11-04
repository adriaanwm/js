# routeMatch

`routeMatch(string, string) => object | null`

Function for matching a url definition to a route.
Useful for building your own spa router.
Also a building block for @jsbit/findMatchingRoute @jsbit/spa-router and @jsbit/preact-redux-router

```
routeMatch("/users/123?modal=Follow", "/users/:userId")
> {userId: 123, modal: "Follow"}

routeMatch("/users/123?modal=Follow", "/photos/:photoId")
> null
```

Basically a copy of the `exec` function in developit's preact-router.
