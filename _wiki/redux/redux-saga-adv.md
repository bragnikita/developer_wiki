---
category: redux
---
## неблокируюющие вызовы

fork используется для запуска другого генератора или функции в отдельном "потоке".

`fork(generator | function, ...params):task` - запускает генератор или функцию в отдельном потоке и сразу же (дойдя до первого асинхронного вызова) возвращает управление в вызывающий код с дескриптором (TaskObject). Поток привязан к родителю (то есть, если родительская сага должна будет завершиться, она все равно будет ждать пока завершаться форкнутые саги). Ошибки из форкнутой саги возвращаются в родительскую и отменяют ее. Отмена форкнутого таска автоматически завершает все форкнутые таски. Если форкнутый таск падает до первого yield, то родительский таск не получит дескриптора и будет отменен сразу же.

yield cancel(task_descriptor) отменяет форкнутый таск и немедленно возвращает управление (то есть, не ждет окончания отмененного таска)
при отмене таска ближайший же yield выкинет управление в окружающий блок finally (если он есть). В нем можно убедиться, что таск действительно отменен черезе yield cancelled() и выполнить clean up.

значение таска (по завершению) можно получить из task.result() или подключившись промисом

Дескриптор Task:

```
task.isRunning()	true if the task hasn't yet returned or thrown an error
task.isCancelled()	true if the task has been cancelled
task.result()	task return value. `undefined` if task is still running
task.error()	task thrown error. `undefined` if task is still running
task.done	a Promise which is either:
resolved with task's return value
rejected with task's thrown error
task.cancel()	Cancels the task (If it is still running)
```


## Параллельное выполнение

const [res1, res2] = yield all([call(... ), call(...)])
если хоть один таск будет отменен, весь yield будет отменен. Управление возвращается в генератор, когда либо все таски будут завершены, либо что-то будет rejected (тогда вылетит исключение, а другие таски будут отменены)

```javascript
function* mySaga() {
  const { customers, products } = yield all({
    customers: call(fetchCustomers),
    products: call(fetchProducts)
  })
}
```

## Гонка
Используется, если требуется получить результат только одного таска из нескольких запущенных (или ошибку). Возвращает результат первого завершившегося таска, а остальные отменяет.

Пример: отключить таск по таймауту
```javascript
const {posts, timeout} = yield race({
    posts: call(fetchApi, '/posts'),
    timeout: call(delay, 1000)
})
if (posts)
	put({type: 'POSTS_RECEIVED', posts})
else
	put({type: 'TIMEOUT_ERROR'})
```
Пример: отключить таск по событию

```javascript
function* watchStartBackgroundTask() {
  while (true) {
    yield take('START_BACKGROUND_TASK')
    yield race({
      task: call(backgroundTask),
      cancel: take('CANCEL_TASK')
    })
  }
}
```
