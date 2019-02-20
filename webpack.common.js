const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			title: 'nbeverages admin page',
			template: 'src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
};
