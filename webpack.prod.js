const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	// devtool: false,
	// watch: true,

	// getting rid of entry point cos we'll keep it in webpack.common.js file
	output: {
		filename: 'main.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],

	// in the prod, we get rid of the plugins as well as in development version except for the minicssextractplugin that would be useful in production
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, // adding this here for production purpases to extract css into files

					'css-loader', // Translates CSS into CommonJS

					'sass-loader', // Compiles Sass to CSS
				],
			},
		],
	},
});
