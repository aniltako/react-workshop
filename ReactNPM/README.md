### Installation:

```
mkdir my-app
```

```
cd my-app
```

```
npm init -y
```

```
npm install react react-dom
```

```
mkdir public && cd public && touch index.html
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>NPM</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

```
mkdir src && cd src && touch index.js && touch index.css
```

```jsx
class App extends React.Component{
    render(){
        return(
            <div>Hello World!!!!</div>
        )
    }
}

ReactDOM.render(
    <App />
, document.getElementById('root'));
```

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin 
```

```
touch webpack.config.js
```

```js
var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]

}

```
package.json
```

"babel":{
    "presets" : [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}

OR

```
touch .babelrc
```
{
    "presets": ["@babel/preset-react"]
}

```
package.json
```
"scripts": {
    "start": "webpack-dev-server --open"
}