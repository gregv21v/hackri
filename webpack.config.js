var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

//Fix to minified React development warning on production
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});

module.exports = {
	entry: [
		'babel-polyfill',
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js"
	},
  resolve: {
    alias: {
      'react$': path.join(__dirname, 'node_modules', 'react','dist','react.min.js'),
      'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','dist','react-dom.min.js')
    }
  },
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, loader: "style-loader!css-loader"}
		]
	},
	plugins: [HTMLWebpackPluginConfig]
};
