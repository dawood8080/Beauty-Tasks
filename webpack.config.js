const path = require('path')

module.exports = {
  entry: './src/components/Pages/main-page/main-page.ts',
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
    // modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['', '.tsx', '.ts', '.js'],
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    //   '@constants': path.resolve(__dirname, './src/constants'),
    //   '@hooks': path.resolve(__dirname, './src/hooks'),
    //   '@components': path.resolve(__dirname, './src/components')
    // }
  },
  output: {
    filename: './bundle.js',
  },
}
