// Global dependencies
const Webpack       = require('webpack');
const WebpackServer = require('webpack-dev-server');
const path          = require('path');

// Local dependencies
const socket  = require('./components/socket');
const server  = require('./components/server');

// Get parent directory
const parent = path.dirname(module.parent.filename);
let port = 3333;

// Exposed API
exports.socket = socket;

exports.port = (i) => {
  port = i;
}

exports.production = (options) => {
  server.production(options, parent);
}

exports.development = (options) => {
  server.development(port, options, parent);
}
