const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const pathsToClean = [
  "js/*.*"
];

const cleanOptions = {
  root: __dirname
};

module.exports = {
  mode: 'development',
  entry: {
    app: './ts/app.ts',
  },
  devtool: 'inline-source-maps',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "js")
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx?$/,
        loader: 'ts-loader'
      },
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ]
};
