# reqly react
React helper to quickly run a server with Babelify and react hot-loader

Add the following to `package.json`

```json
"babel": {
  "presets": ["es2015", "react"]
},
```

# build development
```javascript
// Dependencies
var bootract = require('bootract');

// Set port on localhost
bootract.port(3333);

// Create webpack server with live-reload
bootract.development({
  input:  "./src/index.jsx",
  output: "./src/bundle.js"
});
```

# build production
```javascript
// Dependencies
var bootract = require('bootract');

// Compile source code and export
bootract.production({
  input:  "./src/example.jsx",
  output: "./src/bundle.js"
});
```
