---
categories: linux
keywords: bash, strings, regex
---
# Regexp

<http://wiki.bash-hackers.org/syntax/pattern>

```sh
if [[ $STR =~ .*.txt ]]; then cmd; fi;
```

# Разбор строковых переменных
Англ: 'Manipulating and/or expanding variables'
* `${var:pos}` - подстрока начиная с позиции __pos__
* `${var:pos:length}` - подстрока длиной __length__ с позиции __pos__
![](img/bash_string_selectors.png)

![](img/bash_string_selectors_2.png)

# Поиск по строкам
## grep
Поддерживает сложные регекспы с флагом -E

<https://gist.github.com/bbrother92/64c22b8be8221b45709ae1c03cd25028>

Special symbols: `. ^ $ * + - ? ( ) [ ] { } \ |`

# sed
### замена
```sh
sed -e 's/'"#{env}"'/'"$ENV_NAME"'/g' template.txt > result.txt
sed -e 's/pattern1/pattern2/g; s/p1/p2/g' template.txt > result.txt
sed -f mycommands_file target.txt
sed 's/p1/p2/w output_file' target.txt #пишет в файл, но только обработанные строки
sed -n 's/p1/p2/p' target.txt #выводит только те строки, где были найдены совпадения
sed 's!/bin/bash!/bin/csh!g' /etc/passwd #первый символ после s будет считаться разделителем
# благодаря этому не нужно экранировать слеши
sed 'str_pattern/s/pat1/pat2/g' target.file #str_pattern задает фильтр для строки, в которой делается замена
sed '2s/pat1/pat2/g' target.file #2 - номер строки, где производить замену
```
### указание строк
* `2s/a/b/` - 2-я строка
* `2,4s/a/b/` - 2-4 строки
* `2,$s/a/b/` - начиная со 2-й строки до конца
* `/pattern/s/a/b/` - в строках, подходящих по pattern

### другие операции со строками
```sh
sed '2d' file #удалить 2-ю строку
sed '/pattern/d' file

sed 'i\New first line' file # вставляет строку в начало
sed 'a\New last line' file # вставляет строку в конец
sed '2i\New last line' file # вставляет строку перед 2-й

sed '3c\Str replacement' file # заменяет 3-ю строку на новую
sed '/pattern/c Str replacement' file # заменяет строку по паттерну

sed '3/r include' file # вставить после 3-й строки содержимое фейла include
```

# awk
<https://habr.com/company/ruvds/blog/327754/>
```sh
awk -F: '{print $1}' # использовать разделитель : для разбиения и вывести 1-е поле
# $0 - вся строка
awk '{$2="new value"; print $0}' #замена 2-го поля на новое значение и вывод всей строки
awk '{print $1 " has value " $2 }' # форматированный вывод
awk '/re/ {…}' file # обработать строки соответствующие регекспу
```
Аналог с использованием файла
```awk
{
  text = " has value "
  print $1 text $6
}
```
