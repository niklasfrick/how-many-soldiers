const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: __dirname + '/src/app/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: [
					/node_modules/
				]

			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/public/index.html',
			inject: 'body'
		})
	],
	devServer: {
		contentBase: './src/public',
		port: 4000,
	}
}