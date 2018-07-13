---
category: react
keywords: router
---
*ver. ^4.0.0*  
`yarn add react-router`  
<https://reacttraining.com/react-router/web/guides/philosophy>


```javascript
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </BrowserRouter>
), el);
```

## Динамический роутинг
Компонент `Route` рендерит указанный компонент в зависимости от текущего *location*, либо рендерит *null*

`Route` передает в компонент три параметра:
* location
  - hash, pathname
  - search
    - юзать new URLSearchParams(str) для разбора параметров
    - и .toString() для получения строки
  - state
* match
  - isExact - true, если было полное совпадение
  - params - параметры из path-сегментов
  - path - паттерн, который использовался для матчинга
  - url - совпавшая часть url
* history  <[API](https://github.com/ReactTraining/history)>
  - push - новый элемент стори в стек
  - replace - заменить текущий элемент в стеке
  - go
  - goBack
  - goForward
  - block(msg) - установить блок на навигацию с выдачей alert-а
    - возвращает функцию, снимающую блок
  - listen(fn(location, action)) - отслеживать изменения location
## Route
* component
  - не использовать с inline-компонентами
* render: func
  - использовать для inline-компонентов
  - рендерит без перемонтирования
* children: func
  - рендерит компонент вне зависимости от того, был матчинг или нет
  - если матчинга не было, `match` === null
  - полезно для подсветки текущего таба/навигации

## Redirect
Как только `Redirect` рендерится, он выполняет роутинг на *to* (с *from*). Оба параметра могут быть строкой или `location`-объектом
## matchPath
`import { matchPath } from 'react-router'`  
позволяет вручную создать match-объект, указав те же параметры, что и в `Route` [API](https://reacttraining.com/react-router/web/api/matchPath)
## withRouter
HOC для передачи параметров роутера в обернутый компонент.

# Линки
## Link
* `to` - строка или location, куда переходить
* `replace`:bool - replace вместо push
## NavLink
* можно передать `activeClassName` и `activeStyle`, которые будут применены если текущая (или указанная в location) совпадает

# [Тестирование](https://reacttraining.com/react-router/web/guides/testing)
Если компонент содержит *Route* или *Link*, они ожидают __context__ роутера, и будут выдавать warning-ги при отстутствии. Так что надо оборачивать компонент в `MemoryRouter`

### Стартовый route
```
test('current user is active in sidebar', () => {
  render(
    <MemoryRouter initialEntries={[ '/users/2' ]}>
      <Sidebar/>
    </MemoryRouter>
  )
  expectUserToBeActive(2)
})
```
