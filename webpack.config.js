const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: [
    path.join(__dirname, "src/index.js"),
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    open: "chrome",
    hot: true,
    historyApiFallback: true,
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.join('./index.html'),
      filename: "index.html"
    }),
  ],
};
