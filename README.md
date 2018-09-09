# simplite loader
load simplite template and compile

    install
    npm install simplite-loader --save-dev

```javascript
let tpl = import tpl from ('./path/xxx/index.tpl')
domNode.innerHTML = tpl(data)
```
if you use webpack, you can use it at webpack.config.js:
```javascript
  module: {
    rules: [
      {
        test: /\.tpl$/,
        exclude: /node_modules/,
        use: {
          loader: 'simplite-loader'
        }
      }
    ]
  }
```

[simplite template](https://github.com/zhangshaolong/simplite "simplite")

[a webpack+es6+simplite+simplite-loader demo](https://github.com/zhangshaolong/scaffold "scaffold")