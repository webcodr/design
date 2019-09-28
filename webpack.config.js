const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractStyles = new ExtractTextPlugin('[name].css')
const extractHtml = new ExtractTextPlugin('[name].html')

const config = {
  mode: 'development',
  entry: {
    index: [
      path.resolve(__dirname, 'templates/index.pug')
    ],
    post: [
      path.resolve(__dirname, 'templates/post.pug')
    ],
    'css/application': [
      path.resolve(__dirname, 'assets/styles/application.scss')
    ],
    'js/application': [
        path.resolve(__dirname, 'assets/js/application.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/*/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.pug$/,
        use: extractHtml.extract({
          use: ['html-loader', 'pug-html-loader?pretty&exports=false']
        })
      },
      {
        test: /\.scss$/,
        use: extractStyles.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer()
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: context => {
                  return {
                    includePaths: [
                      path.resolve(__dirname, 'node_modules/sanitize.css/')
                    ]
                  }
                }
              }
            }
          ]
        })
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    extractStyles,
    extractHtml
  ]
}

module.exports = config
