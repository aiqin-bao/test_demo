const webpack = require('webpack')

const Merge = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base.config')


const prodConfig = {
	mode: "production",

	output: {
		path: resolvePath("build"),
		filename: "[name].[hash:4].js",
		chunkFilename: "[name].[hash:4].js",
		pathinfo: false,
		publicPath: "/" //cdn
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],

	optimization: {
		minimize: true,
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0,
					name: "common"
				}
			}
		}
	}
};

module.exports = Merge(baseConfig, prodConfig)