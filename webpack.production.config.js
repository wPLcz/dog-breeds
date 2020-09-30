const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "production",
  entry: [
    path.join(__dirname, "src/index.js"),
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    chunkFilename: '[name].bundle.js',
    filename: "script.js",
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
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
        },
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      maxSize: 220,
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.join('./index.html'),
      filename: "index.html"
    }),
  ],
};
