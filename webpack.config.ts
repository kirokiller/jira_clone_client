import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      favicon: path.join(__dirname, 'src/favicon.png'),
    }),
  ],
};

export default config;
