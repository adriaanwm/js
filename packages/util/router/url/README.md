# url

```javascript
const url = buildUrl(
  {base: '', paths: {home: '', signup: 'signup'}},
  {api: {base: 'https://example.com/api', paths: {user: 'user/:id'}}}
)

url('home') // ''
url('api.user', {id: 12}, {search: 'hello'}) // 'https://example.com/api/12?search=hello'
```
