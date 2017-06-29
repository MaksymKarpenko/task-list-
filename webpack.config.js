const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '.app.bundle.js'
	},
	module: {
		rules:[
			{
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: ['css-loader', 'sass-loader'],
					publicPath: './build'
				}) 
			},
			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}

		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		stats: 'errors-only',
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'project Demo',
			template: './src/index.ejs'
		}),

		new ExtractTextPlugin({
			filename: 'app.css',
			disable: false,
			allChunks: true
		})
	]
}