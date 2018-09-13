---
category: python
---
[Tutorial](https://docs.python.org/3/tutorial/index.html)
[Library ref](https://docs.python.org/3/library/index.html)
## import
```python
import math as m
m.e
# ---
from math import e as e_number
e_number
# ---
from math import (sin, cos, tan)
from sys import * #импортирует все атрибуты, не начинающиеся с _
# __all__ может ограничить список импортируемых атрибутов
version
version_info
```
### проверка, что модуль скрипт запущен в качестве основной программы
`if __name__ == "__main__": ...`

Подгрузка модулей происходит из глобальных либ питона, текущей директории и из указанных в sys.path (можно модифицировать в рантайме)

## exceptions
BaseException - база  
Exception - база для юзерских исключений
* OSError - системная ошибка
  - ConnectionError
  - FileExistsError
  - FileNotFoundError
* RuntimeError
* Warning

```python
try:
  #code
  raise RuntimeError
except FileNotFoundError:
  #handle
else:
  #if no exceptions have been raised
finally:
  #in all cases
```
### defining exceptions
```python
class Error(Exception):
    """Base class for exceptions in this module."""
    def __init__(self, message):
      pass
```  

## reading/writing files
```python
f = open('file.txt')
for line in f:
  line

f = open('file.txt', 'w')
  f.write('data')
f.close()  

with open("file") as f:   #auto close
  print(f.read())
```
## JSON, Yaml
```python
import json
json.dumbs(object) #to json string
json.loads(string) #parse, raises ValueError if can not
```
