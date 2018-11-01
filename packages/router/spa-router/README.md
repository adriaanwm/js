# spa-router

- Tiny
- Not coupled to any rendering framework like React or Preact
- Can be used with rendering frameworks like react or preact :)
- Not coupled to any store like redux
- Can be used with stores like redux :)
- Supports nested routes (as deeply as you need, and with no requirement of nested path structure)

## Annoyances

- Since updating a store like redux is not synchronous, during the time after `setCurrentRoute` is called until the store actually gets updated, the component that is returned might not match the value in the store. If you have a way to solve this, let us know.

## Example Usage

```
const routes = {
  landing: {path: '/landing', component: Landing},
  signup: {path: '/signup', component: SignUp}
}

const App = () =>
  <div>
    <MyRouter routes={routes} />
  </div>
```

## API

### router

- Returns a component that matches `currentPath` and updates state with route details (like query params and dynamic path arguments)

#### Parameters

- `options`: options object
- `options.routes`: object of route defitions
- `options.currentPath`: the current url path (with query string) (from your store)
- `options.setCurrentRoute`: function that should accept and save `currentRoute` in your store
- `options.currentRoute`: the value that you saved in `setCurrentRoute`
- `options.notFound`: anything, will be returned when no matching route definition is found
