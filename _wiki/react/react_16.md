---
category: react
keywords: react
---
### Refs to DOM
```javascript
this.myRef = React.createRef();
// ...
render() {
    return <div ref={this.myRef} />;
}
```
Использование:
```javascript
// если ссылка на HTML-элемент, то в current будет просто DOM
this.textInput.current.focus();
// если там class-компонент, то будет инстанс класса
// на функциональный компонент получить нельзя (нет инстанса)
```
* `current` устанавливается при монтировании/размонтировании компонента и  обновляется перед componentDidMount или componentDidUpdate.
* в ref можно передать вместо ссылки сеттер, в который будет передаваться инстанс или DOM-нода (не ссылка !!!)

### Lifecycle

<https://gist.github.com/bvaughn/923dffb2cd9504ee440791fade8db5f9>

Simulation: <https://reactarmory.com/guides/lifecycle-simulators>

#### Монтирование
* constructor(props)
* static getDerivedStateFromProps(props, state) => new state / null
* componentWillMount() / UNSAFE_componentWillMount()
* render()
* componentDidMount()
  - вызвается до того, как браузер перерисует экран
  - компотент уже смонтирован в DOM, доступны все ссылки и размеры
  - можно менять стейт и запускать ререндеринг
  - хорошее место для установки фокусов, подгонки размеров, скролла, запуска длинных запросов данных


#### Обновление
* componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()
* static getDerivedStateFromProps(props, state) => new state / null
* shouldComponentUpdate(nextProps, nextState)
* componentWillUpdate() / UNSAFE_componentWillUpdate()
* render()
* getSnapshotBeforeUpdate(prevProps, prevState) => snapshot (any value)
  - вызывается прямо перед коммитом в DOM
  - здесь еще доступны ссылки, размеры и позиции скролла, что были до обновления
  - snapshot будет передан в componentDidUpdate
* componentDidUpdate(prevProps, prevState, snapshot)
  - здесь можно обновлять стейт и запрашивать данные, отслеживая изменения в свойствах

#### Перехват ошибок
* componentDidCatch(error, info)
 - перехватывает ошибки из **нижележащих** компонентов
 - можно вызывать setState, чтобы отрендерить fallback UI

#### Размонтирование
* componentWillUnmount()
