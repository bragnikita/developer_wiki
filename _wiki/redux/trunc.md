---
category: redux
---
# trunc

Транк - это функция, оборачивающая нужную функциональность, которая будет выполнена спустя время. redux-trunk позволяет использовать эти функции в качестве экшенов перенося вызов dispatch внутрь транка, где есть доступ ко всему store

`func(dispatch(), getState(), ...extra_args) => val`

Подключение
```javascript
import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
  let store = createStore(app, applyMiddleware(thunk.withExtraArgument(extra_args)))
  return store
}
```

Экшен-creator

```javascript
function action_creator(args) {
	return (dispatch, getState) {
		...
		return "result"
	}
}
```

тогда dispatch(action_creator(args)) вернет "result"

```javascript

export function fetchData() {
	return (dispatch, getState) {
		dispatch({type: GET_DATA});
		$.get(getState().url).then((data) => dispatch({type: GET_DATA_SUCCESS, payload: data}))
							 .catch((err) => dispatch({type: GET_DATA_FAILED, payload: error}));
	}
}
```
