const path = require('path')

module.exports = {
  entry: './src/components/pages/main-page.ts',
  module: {
    rules: [
      {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.js$/,
            loader: "source-map-loader",
        },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js'],
  },
  output: {
    filename: './bundle.js',
  },
}