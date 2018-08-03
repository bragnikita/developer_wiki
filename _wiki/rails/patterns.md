---
category: rails
keywords: pattern
---
<https://codeclimate.com/blog/7-ways-to-decompose-fat-activerecord-models/>

## Value objects
Комбинация значения и связанных с ним методов в одном объекте. Объект неизменяемый.  
Например, методы сравнения, хеш, to_s, фабрики

## Service object
Инкапсулирует операцию.  
Кандидат на выделение в сервисный объект  
- операция сложная
- операция воздействует на несколько разных моделей
- взаимодействие со внешним сервисом
- операция не является характерной операцией для конкретно этой модели
- есть разные варианты выполнения этой операции (напр, для разных классов юзеров)

## Form Object
Модель формы, когда с одной формы обновляются несколько разных моделей.  
Объект собирает атрибуты формы, выполняет валидацию и сохранение.  
Аналогичного с ActiveModel поведения можно добиться включением концернов
- include ActiveModel::AttributeAssignment
- include ActiveModel::Conversion
- include ActiveModel::Validations
или сразу всё `include ActiveModel::Model`

## Query object
```ruby
class AbandonedTrialQuery
  def initialize(relation = Account.scoped)
    @relation = relation
  end

  def find_each(&block)
    @relation.
      where(plan: nil, invites_count: 0).
      find_each(&block)
  end
end
```
## Policy Object
Обертка вокруг модели, реализующий бизнес-правило-вывод на основе информации модели.

## Decorator
Обертка вокруг модели, добавляющая методы, редко используемые или нехарактерные для модели.
