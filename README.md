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
var reqly = require('reqly-react');

// Set port on localhost
reqly.port(3333);

// Create webpack server with live-reload
reqly.development({
  input:  "./src/index.jsx",
  output: "./src/bundle.js"
});

// Create socket server
reqly.socket('/', 8080);
// Read RFC-6455 standard for implementation      
```

# build production
```javascript
// Dependencies
var reqly = require('reqly-react');

// Compile source code and export
reqly.production({
  input:  "./src/example.jsx",
  output: "./src/bundle.js"
});
```
