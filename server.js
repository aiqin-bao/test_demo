const devMiddleWare = require('webpack-dev-middleware')
const hotMiddleWare = require('webpack-hot-middleware')
const webpack = require('webpack')
const express = require('express')
const open = require('open')
const output = require("friendly-errors-webpack-plugin/src/output");

const devConfig = require('./webpack.dev.config')


const port = 3002

const compiler = webpack(devConfig);

const app = express()



app.use(devMiddleWare(compiler, {
	publicPath: devConfig.output.publicPath,
	logLevel: 'silent',
	quiet: true
}))


app.use(hotMiddleWare(compiler))

app.listen(port, (error, port) => { 
	if (error) {
		console.log(error, '===error===')
	} else { 
		console.warn('===启动成功===');
	}
})

open(`http://localhost:${port}`);





