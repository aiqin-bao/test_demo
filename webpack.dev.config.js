const path = require('path')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const Merge = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolvePath = name => path.resolve(__dirname, name)

const devConfig = {
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'sass-loader?sourceMap',
					'postcss-loader?sourceMap'
				]
			}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};


module.exports = Merge(baseConfig, devConfig)