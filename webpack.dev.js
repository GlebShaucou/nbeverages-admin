const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const devServerPort = 3004;

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: './dist',
		port: devServerPort,
		hot: true,
	},
	optimization: {
		usedExports: true,
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
});
