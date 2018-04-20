import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

let extractStyles = new ExtractTextPlugin('[name].css')
let extractHtml = new ExtractTextPlugin('[name].html')

let config = {
  mode: 'production',
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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/*/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }]]
            }
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
              loader: 'csso-loader?-restructure'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: [
                      'last 2 version',
                      'Explorer >= 10',
                      'Android >= 4'
                    ]
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, 'node_modules/sanitize.css/'),
                  path.resolve(__dirname, 'node_modules/highlight.js/styles')
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractStyles,
    extractHtml
  ]
}

export default config
