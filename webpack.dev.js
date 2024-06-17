const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',
	devtool: false,

	// in dev version, entry point is taken away and then we remove the contenthash and keep name plain
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},

	// in the dev, we get rid of the pluginss as well as in production version

	// we remove all the rules in development as well as in production
});
