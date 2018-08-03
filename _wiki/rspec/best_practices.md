---
---
<http://www.betterspecs.org/>

#### Имена методов
```
describe '.authenticate' do
describe '#admin?' do
```
#### Использовать контекст
```
context 'when logged in' do
  it { is_expected.to respond_with 200 }
end
```
expect-ы говорят сами за себя, как *должно быть*, словами в названии контекста описывать только условия *когда*
#### Один пример - одна проверка поведения
внутри it - один expect

#### Проверять валидные, невалидные и крайние случаи
#### Использовать expect - синтаксис
#### Использовать хуки
let, let! и subject
#### 
