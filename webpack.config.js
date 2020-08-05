const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [ 
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: {
          loader: "babel-loader"
        }, // весь JS обрабатывается пакетом babel-loader
        exclude: /node_modules/ // исключает папку node_modules
      }, 
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }, 
          
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader?name=./vendor/[name].[ext]', ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',

          },
        ],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin(
      {
           // Означает, что:
      inject: false, // стили НЕ нужно прописывать внутри тегов
      template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
      filename: 'index.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
      }
  ),
new MiniCssExtractPlugin()]
};