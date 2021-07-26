const pathLib = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = function(env, argv) {
  console.log(env, '\n', argv)
  env = env || { development: true }
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
              presets: ['@babel/preset-env'],
              cacheDirectory: pathLib.resolve(__dirname, '.cache/babel-loader')
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'autoprefixer'
                    ],
                  ],
                },
              }
            }
          ]
        },
        {
          test: /\.less$/i,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'autoprefixer'
                    ],
                  ],
                },
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
          },
          type: 'javascript/auto',
          dependency: { not: ['url'] },
        },
        {
          test: /\.(eot|woff2?|svg|ttf)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'imgs',
              limit: 4 * 1024
            }
          },
          type: 'javascript/auto',
          dependency: { not: ['url'] },
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
