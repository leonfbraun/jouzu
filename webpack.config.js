// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './apps/client/src/main.ts',
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules')],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './apps/client/tsconfig.json',
      }),
    ],
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'assets'),
  },
  devtool: 'source-map',
};
