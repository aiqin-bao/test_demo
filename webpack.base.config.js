const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolvePath = (name) => path.resolve(__dirname, name)


const baseConfig = {
  entry: [
    "webpack-hot-middleware/client?noInfo=true&reload=true",
    "./src/index.js"
  ],

  output: {
    filename: "[name].js",
    path: resolvePath("build"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/transform-runtime"]
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html"
    })
  ],

  resolve: {
		extensions: [".js", ".scss", ".css"],
		alias: {
			_src : resolvePath('src')
		}
  },

  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};


module.exports = baseConfig;