---
title: Golang usage hints
category: golang
---
[Cheatsheet](https://devhints.io/go)

Воркспейс - это папка с директориями bin/ и src/
Под src/ лежат репозитории (гита)  
Под репозиторием - папки: пакеты или команды. Рекомендуется сохранять уникальность пути к пакету, называя репозиторий, напр, `github.com/<user>/<package name>`  
В пакете/команде на одном уровне лежат сорцы и тесты.

переменная `GOPATH` указывает на воркспейс  
имя пакета - последняя часть пути к папке пакета (имя самой папки)  
исполняемые команды обзательно должны быть в пакете `main`

Тестирование: `testing` пакет
`go get <package name>` скачивает пакет и все его зависимости прямо в воркспейс

```golang
package main

import ("fmt"
	"github.com/bragnikita/stringutils"
)

func main() {
	fmt.Printf(stringutils.Reverse("hello, world\n"))
}
```

# Особенности языка
* имена с заглавной буквы экспортируются из пакета
* обычное присваивание `var i int = 1`, присваивание с автовыводом типа (только внутри функции): `i := 1`
* типы `bool string int int8-64 uint uint8-64 byte uintptr float32,64 complex64,128 rune`
* указатели
```golang
var p *int // объявление указателя
i = 21
p = &i //получение указателя на переменную
fmt.Println(*p) // разрешение указателя
*p = 32 // устанавливает значение переменной i через указатель на нее
```
* [built-in functions](https://golang.org/pkg/builtin/#append)
* [slices](https://blog.golang.org/go-slices-usage-and-internals)
* методы можно определить только для типа-получателя, объявленного в том же саомм пакете
* в метод можно передавать получаетя по указателю или по значению
* 
