---
category: redux
---
# Redux Saga
Saga - функция, возвращающая объект генератора (иными словами, функция вида function* func() {})

Effect - простой объект с инструкциями для middleware. Если уступить эффект, то saga встанет на паузу, пока эффект не будет полностью применен.

Генератор уступает объект saga middleware, которое его интерпретирует.

Например, если уступить промис, то middleware вызовет next() у генератора тогда, когда промис разресолвится или зареджектится (возвращая из yield значение коллбека либо выкидывая из него исключение, если оно было брошено в коллбеке)
yield $.ajax(...)

import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects'

yield call(func, params...) - указание выполнить функцию func с параметрами params
yield call([obj, func], params) - указание выполнить функцию func в контексте объекта obj с параметрами params
yield apply(obj, func, params) - алиас к функции выше

yield cps(func, params) - указание запустить func в форме func(params..., callback(error, result))

yield put('INCREMENT')

yield select(selector, params...) - возвращает срез стейта, созданный функцией-селектором (state, params...) => slice_of_state

yield take(pattern | predicate(action)) - паузит генератор в ожидании, когда будет задиспатчен экшен, соответствующий паттерну или предикату. Если pattern имеет toString(), то сработает матчинг action.type === pattern.toString(). Если строка, то на нее матчится action.type. Если массив, то сравнивается по правилам выше с каждым элементом слева направо.
Экшен END отменяет все ожидающие на take саги. Чтобы этого не случилось, юзать take.maybe - тогда на END просто возвращается объект END, а сага не отменяется.

yield takeEvery(action, generator, ...args) - инструктирует saga запускать генератор всякий раз, когда action диспатчится (мб неск параллельных выполнений). Передает args и action в сагу.

yield takeLatest(action, generator, ...args) - инструктирует saga запускать генераторы всякий раз, когда action диспатчится (параллельности быть не может, каждый новый входящий action отключает предыдущий генератор). Передает args и action в сагу.

yield all([generator1, generator2]) - запустить в параллель указанные генераторы

sagaMiddleware.run(generator) - запускает генераторы в движке saga

```javascript
import { createStore, applyMiddleware } from 'redux'
import app from './reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}
```

```javascript
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { put, takeEvery } from 'redux-saga/effects'
import getPeople from './api'

function* fetchData (action) {
  try {
    const data = yield getPeople()
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* dataSaga () {
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga
```

Dispatch action FETCHING_DATA to call the saga
```javascript
dispatch({type: FETCHING_DATA})

```
