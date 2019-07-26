### Installation:

```
npm i --save jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

```
package.json
```

"dependencies": {
    "react": "<current-version>",
    "react-dom": "<current-version>"
},
    "devDependencies": {
    "@babel/preset-env": "<current-version>",
    "@babel/preset-react": "<current-version>",
    "babel-jest": "<current-version>",
    "jest": "<current-version>",
    "react-test-renderer": "<current-version>"
},
    "scripts": {
    "test": "jest"
}

```
babel.config.js
```

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};

```
npm run test
```