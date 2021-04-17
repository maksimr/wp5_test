const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pkg = require('./package.json');
module.exports = {
  output: {
    publicPath: 'http://localhost:8080/'
  },

  devtool: false,
  devServer: {
    port: 8080
  },

  plugins: [
    new ModuleFederationPlugin({
      name: pkg.name,
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {}
    })
  ]
};
