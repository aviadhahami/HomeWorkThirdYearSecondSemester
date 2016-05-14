/**
 * Created by aviad on 5/9/2016.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var HTMLconfig ={
	title: 'My profile',
	filename: 'profile.html',
	favicon: './app/assets/favicon/logo.ico',
	template: path.join(__dirname,'app/index.html')
};

module.exports = {
	entry : './app/index.js',
	output : {
		path: path.join(__dirname,'prod'),
		filename: "bundle.js"
	},
	module: {
		loaders :[
			{test: /\.css$/, loader: 'style!css'},
			{test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'},
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{ test: /\.(png|jpg)$/, loader: 'url-loader' },
		]
	},
	plugins:[
		new HtmlWebpackPlugin(HTMLconfig)
	]
};