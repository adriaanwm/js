# findMatchingRoute

`findMatchingRoute(routes, currentPath) => object | null`

- Function for finding a route definition based on some path
- Useful for building your own spa router.
- A building block for @jsbit/spa-router.
- Supports nested routes (as deeply as you need)
- Not coupled to any rendering framework like React or Preact

```
const onboardingRoutes = {
  landing: {path: '/landing', component: Landing},
  login: {path: '/login', component: Login}
}

const mainRoutes = {
  profile: {path: '/profile/:profileId', component: Profile},
  onboarding: {routes: onboardingRoutes, component: OnboardingApp}
}

findMatchingRoute(mainRoutes, "/profile/123?query=example")
> {
  component: OnboardingApp,
  args: {profileId: 123, query: 'example'},
  definition: {path: '/profile/:profileId', component: Profile, name: 'onboarding'}
}

findMatchingRoute(mainRoutes, "/owls")
> null
```
