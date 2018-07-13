---
category: webpack
---
* entry point - это файл, откуда начинается построение графа зависимостей (рут дерева зависимостей)
* output - это куда будет положен бандл и как он будет называться
* loader - это то, как входной ресурс будет преобразован в модуль вебпака (и подключен к графу зависимостей)
* plugin - это расширение сборки, позволяющее выполнять разнообразные действия
* mode - это один из трех глобальных режимов (development, production, none) сборки

```javascript
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  mode: 'production'
};

```

### Loaders
Цепочка лодеров работает в обратном порядке - первый лодер в списке берет файл, результат передает во второй. Последний лодер должен вернуть джаваскрипт.
При описании в конфиге выполнение происходит снизу вверх.
```javascript
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }

 ```

## Aliases

 Можно задать алиасы папок и файлов, которые потом использовать в `import`, чтобы не писать все время длинные относительные пути.
 ```javascript
 // webpack.config.js, раздел resolve
alias: {
  Utilities: path.resolve(__dirname, 'src/utilities/'),
  Templates: path.resolve(__dirname, 'src/templates/')
},
//это позволяет не указывать расширение для js и json файлов при импорте
extensions: [".js", ".json"],

// в модуле
import { leftPad } from 'Templates/string_util'
 ```

## Dev tools
### Source maps
 `devtool: 'inline-source-map'` в корне конфига-объекта включает сорс-мапы

### Webpack dev server
`package.json`
 ```json
 scripts: {
	"watch": "webpack --watch",
	"start": "webpack-dev-server --open",
}
 ```

`webpack.config`
 ```javascript
devServer: {
	contentBase: '/dist', // путь к бандлам
	port: 9000,
	host: '0.0.0.0',
	hot: true,
	https: { /* config */},
	index: 'index.html',
	noInfo: true // убирает из косоли инфу о ребилдах (кроме warning и error)
	overlay: true // показывает оверлей при ошибках билда
	proxy: { // прокси к api-серверу
	  "/api": {
	    target: "https://other-server.example.com",
	    pathRewrite: {"^/api" : ""}, //чтобы /api не прикреплялся к хвосту прокси-запроса
	    secure: false
  	},
  	public: "myapp.test:80" // если запросы к дев-серверу надо делать через прокси
  	publicPath: '/assets/' // путь запросов к бандлам

}
 ```
