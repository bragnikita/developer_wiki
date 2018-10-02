---
title: Lang cheatsheet
category: python
---
[Tutorial](https://docs.python.org/3/tutorial/index.html)  
[Documentation](https://docs.python.org/3.7/index.html)  
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
### modules search
* built-in
* list of directories in `sys.path` __can modify in runtime__
  - input script path of cmd
  - PYTHONPATH environment var
  - installation-dependent default

Подгрузка модулей происходит из глобальных либ питона, текущей директории и из указанных в sys.path (можно модифицировать в рантайме)  
### Packages
Это папки, в которых находятся файлы-модули. В каждой папке пакета должен лежать файл `__init__.py`, хоть пустой. Пакеты могут быть вложенными.  
Чтобы можно было импортить * из пакета, импортируемые так модули должны быть явно объявлены в `__init__.py`:
```
__all__ = ["echo", "surround", "reverse"] # имена модулей
```
Относительный импорт (__не работает в main-модуле__)  
```
from . import echo
from .. import formats
from ..filters import equalizer
```

### проверка, что модуль скрипт запущен в качестве основной программы
`if __name__ == "__main__": ...`

## strings

[String methods](https://docs.python.org/3.7/library/stdtypes.html#text-sequence-type-str)

* `f'Results of the {year} {event}` - interpolaton
* `{yes_votes:-9} YES votes {percentage:2.2%}` - interpolation with formatting
* `'{:-9} YES votes {:2.2%}'.format(yes_votes, percentage)` - format string
* `'{yes} YES votes {pc}%'.format(yes='ok', pc='100')` - format string
  - {yes.weight} - get attribute
  - {var:>30} - right aligned (inside 30 symbols length column)
  - {var:d}, {var:x}, {var:bin} - dec, hex, bin; {var:#x} - with 0x prefix
  - {var:.2%} - 80.12%
  - {var:,} - 102,321,000
  - {date:%Y-%m-%d %H:%M:%S} -  datetime format

* str(object) - human-readable representation of any object
* repr(object) - interpreter-readable representation


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
## Loops
```python
while i < 15:
		print(i++)

for i in [1,2,3,4]:
		print(i++)
        if i < 2:    
            continue    
        if i == 3
            break;
else:
    print("break was hit")
```
## Sequences
```python
# all these methods mutate the original list
list = []
list.append(x)
list.extend(other_list)
list.insert(i,x)
list.remove(x) # throw ValueError on abscence
list.index(x,[start[,end]]) # returns position of first x
list.count(x)
list.sort(key=None) # property of lambda, that returns sorting key
list.copy() # shallow copy
list.clear()
len(list) # length

# tuples are immutable lists
t = 4324,"something", (a,344)

# sets can contains unique elements
s = { 'apple', 'orange' }
s1=set(['applie','orange'])
emptySet = set()
'applie' in s # True or False
# other special set operations are available ( - , | , & , ^ )  

`x,y,z = t` -  sequence unpacking  

for index,val in enumerate(['one','two']):
    # ...
```
## Dictionaries

```python
d = { 'apple': 2, 'orange': 10 }
d1 = dict(('apple',2))
d2 = dict(apple=2, orange=10)

for k,v in d.items():
    #...

```
## Functions
### Definiton
```python
def f(a, L=[]):
    return L
f(4,[1,2,4])
f(5)
f(L=[3,2],a=4)

def ff(param, *args, **keywords):
    # args - array of all argument values except 'param'
    # keywords - dictionary of all arguments except 'param'
    pass

i = 5
def p(val=i):
    print(val) # 5, default value is evaluated at the point of function definition
```
### Unpacking arguments list
```python
def f(a,b,c):
    pass
#
params = [1,3,4]
f(*params) # passes array values as positional arguments

```
### Lambda
```python
[4,2,7].sort(key=lambda val: val % 2)
```
### Documentation and annotation
```python
def f():
    """Documentation
    Next line
    """
    pass
print(f.__doc__)
print(f.__annotations__)
```
