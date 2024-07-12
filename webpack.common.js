const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// remove development mode
	devtool: false,
	// watch: true,

	// we'll keep entry point and get rid of output as it is in webpack.prod.js
	entry: {
		main: './src/index.js',
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			chunks: 'main',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/donate.html',
			filename: 'donate.html',
			chunks: 'main',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/about.html',
			filename: 'about.html',
			chunks: 'main',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/blog.html',
			filename: 'blog.html',
			chunks: 'main',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/contact.html',
			filename: 'contact.html',
			chunks: 'main',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/programs.html',
			filename: 'programs.html',
			chunks: 'main',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/emeka-ike.html',
			filename: 'emeka-ike.html',
			chunks: 'main',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/chioma-ikeh.html',
			filename: 'chioma-ikeh.html',
			chunks: 'main',
		}),
	],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', // Creates `style` nodes from JS string

					'css-loader', // Translates CSS into CommonJS

					'sass-loader', // Compiles Sass to CSS
				],
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						// Disables attributes processing
						sources: true,
					},
				},
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'images',
						publicPath: 'images',
					},
				},
			},
		],
	},
};
