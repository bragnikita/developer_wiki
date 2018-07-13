---
title: Bootstrap 4 layout
categories:
  - web
  - css
keywords: bootstrap, css, styling
---
## Grid system
Class prefixes:  
`col- col-sm- col-md- col-lg- col-xl-`  
Без указания числа колонок все колонки в строке будут равны
`div.w-100` для переноса строки внутри колонки  
Указание ширины для одной из колонок подстраивает другие под нее для полного заполнения строки  
`col-{sm,md,lg,xl}-auto` устанавливает ширину зависимой от контента

Убрать gutters между колонками:  
`.row .no-gutters`
( можно просто убрать .container )

Вертикальное выравнивание колонок в строке:  
`.row .align-items-{start,center,end}`
Или отдельно каждой колонки:  
`.col .align-self-{start,center,end}`

Горизонтальное выравнивание колонок:  
`.row .justify-content-{start,center,end, around, between}`

Сдвиг  
`.col offset-{bp}-{size}`  
`.col {ml,mr}-{bp}-{size or auto}` - левый или правый margin  

## Utilites
### Visability
```
.visible / .invisible
or
@include invisible(visible/invisible);
```
### Borders
.border + .border-{position} только с одной стороны
.border-{position}-0 исключение одной стороны
.border + .border-{theme_color} цвет
.rounded / .rounded-{position} / .rounded-circle скругление с одной стороны
### Sizes
.w-{size}, .h-{size}, .mw-{size}, .mh-{size}
### Spacing
{property}{sizes}[-{breakpoint}]-{size}  
size = 0..5  
sides= t/b/l/r | x/y (vert/horiz) | <blank> (for all 4 sizes)  
`mx-auto` - выравнивание блока по центру
### Text
.text-nowrap  
.text-truncate  
.text-hide  
.font-weight-{bold/normal/light}
.font-italic
### Position
.position-{position}
### Flex
.d-flex +  
.justify-content-{breakpoint}-{start/end/center/between/around}  
.align-items-{breakpoint}-{type}  
.align-self-{breakpoint}-{type}  
где type = start/end/center/baseline/stretch

.flex-{bp}-{no}wrap    
.order-{bp}-{val}  

.flex-wrap + .align-content-{bp}-{type}  
### Display
.d-{bp}-none - элемент невидим на bp и выше +  
.d-{bp}-block - элемент виден только на bp или выше

### Images
.img-fluid  
.img-thumbnail

### Table
.table +  
.table-hover  
.table-striped  
.table-bordered
.table-{dart/light}
.table-sm - compact table

tr/td.table-{theme_color}

обертка .table-responsive-{bp} добавляет скролл на малых экранах
