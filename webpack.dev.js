const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const devServerPort = 3000;

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: './dist',
		port: devServerPort,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
});
