---
category: rspec
---

# JSON API testing

[На базе статьи](http://timjwade.com/2016/08/01/testing-json-apis-with-rspec-composable-matchers.html)

* объединять несколько expect в один пример
* первым проверять самый информативный параметр (например, сперва содержимое ответа, а потом уже response code)
* обойти проблему нескольких expect при поморщи aggregate_failures
https://relishapp.com/rspec/rspec-core/v/3-7/docs/expectation-framework-integration/aggregating-failures
```ruby
it 'example name', aggregate_failures: true do
	# ...
end
```
или установить параметр сразу на все спеки в spect/api
```ruby
RSpec.configure do |c|
  c.define_derived_metadata(:file_path => %r{spec/api}) do |meta|
    meta[:aggregate_failures] = true
  end
end
```
## проверка JSON

* `response.parsed_body` возвращает JSON-ответ
* `eq` выполняет точное сравнение `expect(response.parsed_body).to eq(expected)`
* `match` мягче eq (можно указывать не точные значения атрибутов, а matcher-ры), но всё равно требует наличия всех ключей атрибутов
* `include/a_hash_including` проверяет наличие под-мапы или нескольких под-мап внутри другой мапы
```ruby
expected = {
  "data" => [
    a_hash_including(
      "attributes" => a_hash_including(
        "title" => "Post the first"
      )
    )
  ]
}
expect(response.parsed_body).to include(expected)
```
* `include/a_hash_including` может проверять и просто наличие ключей
```ruby
expect(response.parsed_body).to include("links", "data", "included")
```
* при передаче в `include/a_hash_including` карты-литерала, проверка на этом уровне будет уже точной

## проверка	коллекций

* a_collection_including - точная проверка наличия только указанных элементов, порядок неважен
* a_collection_containing_exactly - проверка наличия указанных элементов среди других, порядок неважен
```ruby
expected = {
  "data" => a_collection_including(
    a_hash_including("id" => "1"),
    a_hash_including("id" => "2")
  )
}
expect(response.parsed_body).to include(expected)
```
* если важен порядок, указывай матчеры в литерале-массиве []
* all - проверка, что каждый элемент соответствует структуре
```ruby
expected = {
  "data" => all(a_hash_including("type" => "posts"))
}
expect(response.parsed_body).to include(expected)
```

## проверка значения ключей
* литерал - точное значение
* anything - любое значение (проверяет наличие ключа)
* a_string_matching - лишь часть строки (через регексп или подстроку)
* kind_of - проверка типа
* a_string_matching - часть строки или регулярка

# Test API

## Методы запросов
`actionpack-5.1.5/lib/action_controller/test_case.rb`  


http://api.rubyonrails.org/v5.2.0/classes/ActionDispatch/Integration/Session.html#method-i-process

Тест является подклассом `ActionDispatch::Integration::Session`
```
Attrs:
accept - RW accept header
controller - controller instance
host/host! - W
remote_addr - address of the last request
request - last request
response - last response
request_count - counter

Methods:
https!/https? - mimicking a https
host() - last host
cookies() - last response cookies
reset!()
url_options()
```
