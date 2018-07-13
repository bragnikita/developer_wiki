---
category: ruby
keywords: ruby, string, api
---


`<op>!` возвращают nil, если строка не была изменена, иначе саму строку


## Операции
* capitalize, upcase, downcase
* center(width, padstr=''), ljust, rjust
* strip, lstrip, rstrip
* chomp(separator) - удаляет указанный хвостовой символ (дефолт $/)
* chop - удаляет последний символ
* str << obj / str.concat(a,b...) - добавляет в хвост строковое представление объекта (если integer, то трактуется как code point)
* prepend(str...)
* reverse
* split(pattern, [limit])
  - по дефолту используется $;
  - пустая строка => пустой массив
  - паттерн соотв. пустой строке => массив символов
  - в паттерне группы - массив соответствий
* slice - подстрока
  - slice(index, [length]) / (range)/(regex, [group number])
  - можно юзать оператор []
  - nil если не найдено
* squeeze - склеивает парные символы в один (если указано, то указанные символы)
* delete - удаляет указанные символы
* gsub/sub - замена по паттерну
```ruby
"hello".gsub(/[aeiou]/, '*')                  #=> "h*ll*"
"hello".gsub(/([aeiou])/, '<\1>')             #=> "h<e>ll<o>"
"hello".gsub(/./) {|s| s.ord.to_s + ' '}      #=> "104 101 108 108 111 "
"hello".gsub(/(?<foo>[aeiou])/, '{\k<foo>}')  #=> "h{e}ll{o}"
'hello'.gsub(/[eo]/, 'e' => 3, 'o' => '*')    #=> "h3ll*"
```
* `str[int | int-int | regexp | regex, group | str ] = substr` - замена на substr указанного региона строки
* insert(index, str) - вставка под индексу
* crypt - шифрование с солью
* encode(enc, opts) - перекодирование строки, преобразование окончаний строк, обработка неконвертируемых символов
* scrub - заменяет невалидные байты в строке на указанный символ (или результат блока)
* tr(from,to) заменяет символы, используя 2 строки как карту замены

## Анализ
* str =~ regex - возвращает позицию первого совпадения или nil
* dump, inspect - делает отображаемыми все символы в строке
* count - считает вхождения указанных символов
* empty?
* end_with? / inclide? / start_with? - true если хоть один из указанных подстрок совпадает
* eql?
* length
* `match(regex | pattern str) => MatchData / match?(pattern) => boolean`
* `partition(sep | regex) => [head, match, tail]`` от начала (если не найдено, то `[str, "",""]`)
* `rpartition(sep | regex) => [head, match, tail]` от хвоста (если не найдено, то `[ "","", str]`)
* scan(pattern) => array / block
 - каждый элемент массива - это либо подстрока, либо (если есть группы) - массив
```ruby
str.scan(/(+d):(+d)/) {|group1, group2| ... }
```
* bytesize - кол-во байт в строке


## Обход
* `each_byte, each_char, each_codepoint, each_line`
* getbyte
* `index/rindex(substr|pattern)` - индекс первого/последнего вхождения
* lines(sep) - массив строк
* `upto(last){|s| ... }` - делает итерацию по последовательности до last, вызывая блок

## Регекспы


## Прочее
* Форматирование
```ruby
"%05d" % 123                              #=> "00123"
"%-5s: %08x" % [ "ID", self.object_id ]   #=> "ID   : 200e14d6"
"foo = %{foo}" % { :foo => 'bar' }        #=> "foo = bar"
```
* hex, oct - трактует строку как ?-ичное число и возвращает десятичный integer
* to_c / to_f / to_i / to_r / to_sym - конвертеры
* intern - создает Symbol из строки
* next/succ - возвращает следующую строку инкременцией правого символа
* unpack - позволяет читать байты строки по указанному спец. шаблону
* chars / bytes - строка как массив
* b - строка в кодировке ASCII-8BIT


### Сравнение
* `==` сравнивает строку со строкой или объектом, отвечающим на `to_str`. Сравнение аналогично `eql?` по длине и контенту
* `===` аналог `==`
