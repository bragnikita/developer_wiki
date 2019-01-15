---
category: joint_js
title: Joint JS Concepts
---
# References
* [SVG Tutorial MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

# Components
* `dia.Paper` responsible for rendering
* `dia.Graph` contains a model


# Links
[Links tutorial](https://resources.jointjs.com/tutorial/links)
* `link.source/target` указать элемент или g.Point или любой объект со свойствами x y
* `link.vertices` позволяет установить массив точек, через которые должна пройти линия линка
* `link.router` позволяет установить роутер
* `link.connector` устанавливает коннектор - рендерер самого пути и поворотов
* `link.attr(line.sourceMarker/targetMarker` - маркеры стрелок
```
link.attr({
    line: {
        sourceMarker: { // hour hand
          'type': 'image',
           'xlink:href': 'http://cdn3.iconfinder.com/data/icons/49handdrawing/24x24/left.png',
           'width': 24,
           'height': 24,
           'y': -12
        },
        targetMarker: { // minute hand
            'type': 'path',
            'stroke': 'green',
            'stroke-width': 2
            'fill': 'yellow',
            'd': 'M 20 -10 0 0 20 10 Z'
        }
    }
});
```
