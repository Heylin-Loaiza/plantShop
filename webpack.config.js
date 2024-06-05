const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: {
      import: './src/index.js',
    },
    customize: {
      import: './src/mainCustom.js',
    },
    purchase: {
      import: './src/purchase.js',
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                '...',
                {
                  tag: 'a',
                  attribute: 'href',
                  type: 'src',
                },
              ],
            },
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|PNG)$/,
        use: ['file-loader?name=public/[name].[ext]'],
      },
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/customizeForm.html',
      filename: 'customizeForm.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/purchaseDetails.html',
      filename: 'purchaseDetails.html',
    }),
  ],
};
