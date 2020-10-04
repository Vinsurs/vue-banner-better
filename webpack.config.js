const pathLib = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = function(env, argv) {
  let mode = env || { development: true }
  return {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm',
        '@': pathLib.resolve(__dirname, 'src')
      },
      extensions: ['.vue', '.js', '.json', '.ts', '.d.ts']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')]
              }
            }
          ]
        },
        {
          test: /\.less$/i,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')]
              }
            },
            'less-loader'
          ]
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'fonts',
              limit: 4 * 1024
            }
          }
        },
        {
          test: /\.(eot|woff2?|svg|ttf)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'imgs',
              limit: 4 * 1024
            }
          }
        },
        {
          test: /\.vue$/i,
          use: 'vue-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: pathLib.resolve(__dirname, 'index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),
      new VueLoaderPlugin()
    ],
    ...(env.development
      ? require('./config/config.development')
      : require('./config/config.production'))
  }
}
