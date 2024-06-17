const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'production',
	// devtool: false,
	// watch: true,

	// getting rid of entry point cos we'll keep it in webpack.common.js file
	output: {
		filename: 'main.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	// in the prod, we get rid of the plugins as well as in development version
});
